provider "google" {
  credentials = file("google-cloud-credentials.json")
  project     = var.gcloud_project
  region      = var.gcloud_region
  zone        = var.gcloud_zone
}

resource "google_project_service" "service" {
  for_each = toset([
    "sqladmin.googleapis.com",
  ])

  service = each.key

  project = var.gcloud_project
  disable_on_destroy = false
}