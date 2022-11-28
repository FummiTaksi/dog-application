output "cloud_run_service_name" {
  value = google_cloud_run_service.dog-api.name
  description = "Name of cloud run service"
}