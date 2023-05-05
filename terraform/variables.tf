variable "gcloud_region" { default = "europe-north1" }
variable "gcloud_zone" { default = "europe-north1-a" }
variable "gcloud_project" { default = "efi-ig-serverless-2023" }

variable "dog_backend_sql_database_instance_name" { default = "dog-backend-database-instance" }
variable "dog_backend_database_name" { default = "backend-database" }

variable "dog_backend_service_name" { default = "dog-api" }
variable "dog_frontend_service_name" { default = "dog-frontend" }

variable "environment_name_by_workspace" {
  type = map(string)
  default = {
    staging = "staging"
    production = "production"
    default = "staging"
  }
}

variable "database_max_connections" {
  type = number
  default = 100
}