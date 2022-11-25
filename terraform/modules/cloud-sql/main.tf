terraform {

}

resource "google_sql_database_instance" "instance" {
  name             = "${var.environment_name}-${var.dog_backend_sql_database_instance_name}"
  region           = var.gcloud_region
  database_version = "POSTGRES_14"

  settings {
    tier = "db-f1-micro"

    location_preference {
      zone = var.gcloud_zone
    }

    database_flags {
      name = "max_connections"
      value = tostring(var.database_max_connections)
    }

    maintenance_window {
      day = 1
      hour = 0
    }
  }

  deletion_protection = false
}

resource "google_sql_database" "database" {
  name = "${var.environment_name}-dog-db"
  instance = google_sql_database_instance.instance.name
  depends_on = [google_sql_user.user]
}

resource "google_sql_user" "user" {
  name = "dog-db-user"
  instance = google_sql_database_instance.instance.name
  password = var.typeorm_password

  lifecycle {
    ignore_changes = [password]
  }
}