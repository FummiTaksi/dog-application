variable "environment_name" {
  type        = string
  description = "Name of environment"
  default     = "staging"
}

variable "gcloud_region" {
  type        = string
  description = "GCP region"
  default     = null
}

variable "gcloud_zone" {
  type        = string
  description = "GCP zone"
  default     = null
}

variable "typeorm_password" {
  type        = string
  description = "Typeorm password"
  default     = null
}

variable "gcloud_project" {
  type        = string
  description = "gcloud project"
  default     = null
}

variable "dog_backend_service_name" {
  type        = string
  description = "Service name"
  default     = null
}

variable "instance_connection_name" {
  type = string
  description = "Database instance connection name"
}

variable "google_sql_database_name" {
  type = string
  description = "Database name"
}

variable "google_sql_user_name" {
  type = string
  description = "SQL user name"
}