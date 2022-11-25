variable "environment_name" {
  type        = string
  description = "Name of environment"
  default     = "staging"
}

variable "dog_backend_sql_database_instance_name" {
  type        = string
  description = "CloudSQL Instance name"
  default     = null
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

variable "database_max_connections" {
  type        = number
  description = "Maximum database connections"
  default     = null
}

variable "typeorm_password" {
  type        = string
  description = "Typeorm password"
  default     = null
}