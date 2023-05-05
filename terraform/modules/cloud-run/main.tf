resource "google_cloud_run_service_iam_member" "users" {
  service  = google_cloud_run_service.dog-api.name
  location = google_cloud_run_service.dog-api.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

resource "google_cloud_run_service" "dog-api" {
  name     = "${var.environment_name}-${var.dog_backend_service_name}"
  location = var.gcloud_region


  metadata {
    annotations = {
      "run.googleapis.com/launch-stage" = "BETA"
    }
  }

  template {
    spec {
      containers {
        image = "europe-north1-docker.pkg.dev/efi-ig-serverless-2023/dog-application/dog-api:latest"

        env {
          name  = "TYPEORM_HOST"
          value = "/cloudsql/${var.instance_connection_name}"
        }

        env {
          name  = "TYPEORM_PORT"
          value = "5432"
        }

        env {
          name  = "TYPEORM_USERNAME"
          value = var.google_sql_user_name
        }

        env {
          name  = "TYPEORM_PASSWORD"
          value = var.typeorm_password
        }

        env {
          name  = "TYPEORM_DATABASE"
          value = var.google_sql_database_name
        }

        env {
          name  = "TYPEORM_CONNECTION"
          value = "postgres"
        }

        env {
          name  = "TYPEORM_ENTITIES"
          value = "src/entities/*.entity.ts"
        }

        env {
          name  = "TYPEORM_MIGRATIONS"
          value = "src/migrations/*.ts"
        }

        env {
          name  = "TYPEORM_MIGRATIONS_TABLE_NAME"
          value = "migrations"
        }

        env {
          name  = "TYPEORM_MIGRATIONS_DIR"
          value = "src/migrations"
        }

        ports {
          container_port = 3000
        }
      }
    }

    metadata {
      annotations = {
        "run.googleapis.com/cloudsql-instances" = var.instance_connection_name
        "run.googleapis.com/client-name"        = "terraform"
        "autoscaling.knative.dev/minScale"      = 1
        "autoscaling.knative.dev/maxScale"      = 1
      }
    }
  }

  autogenerate_revision_name = true

  traffic {
    percent         = 100
    latest_revision = true
  }

  lifecycle {
    ignore_changes = [metadata]
  }
}
