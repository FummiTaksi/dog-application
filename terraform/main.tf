provider "google" {
  project = var.gcloud_project
  region  = var.gcloud_region
  zone    = var.gcloud_zone
}

locals {
  environment_name = var.environment_name_by_workspace[terraform.workspace]
  typeorm_password  = data.google_secret_manager_secret_version.staging-database-password.secret_data
}

resource "google_project_service" "service" {
  for_each = toset([
    "sqladmin.googleapis.com",
    "containerregistry.googleapis.com",
    "run.googleapis.com",
    "iam.googleapis.com",
    "cloudresourcemanager.googleapis.com",
  ])

  service = each.key

  project            = var.gcloud_project
  disable_on_destroy = false
}

terraform {
  backend "gcs" {
    bucket = "dog-application-tf-state"
    prefix = "terraform/state"
  }
}