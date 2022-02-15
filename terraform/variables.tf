variable "gcloud_region" { default = "europe-west1" }
variable "gcloud_zone" { default = "europe-west1-b" }
variable "gcloud_project" { default = "genera-terraform-training" }
variable "project_name" { default = "genera" }

variable "genera_backend_sql_database_instance_name" { default = "backend-database-instance" }
variable "genera_backend_database_name" { default = "backend-database" }

variable "artifactory_folder" {default = "dog-api"}
variable "docker_image" { default = "dog-api" }
variable "genera_backend_service_name" { default = "dog-api" }

variable typeorm_password {}


variable "database_max_connections" {
  type = number
  default = 100
}