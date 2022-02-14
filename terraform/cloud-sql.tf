resource "google_sql_database_instance" "instance" {
  name             = "${var.project_name}-${var.genera_backend_sql_database_instance_name}"
  region           = var.gcloud_region
  database_version = "POSTGRES_12"

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

  deletion_protection = true
}

resource "google_sql_database" "database" {
  name = "${var.project_name}-${var.genera_backend_database_name}"
  instance = google_sql_database_instance.instance.name
}

resource "google_sql_user" "user" {
  name = "genera"
  instance = google_sql_database_instance.instance.name
  password = var.typeorm_password

  lifecycle {
    ignore_changes = [password]
  }
}