# Terraform

### Prerequisities

- Terraform version 1.3.3
- Google cloud CLI



## Setup

Ensure that you are on current gcloud project with `gcloud config get-value project`

When using first time or when using new modules, create new bucket named `dog-application-tf-state` manually from GCP console, then run

```
terraform init
```


### Apply changes

Select correct workspace:

````
terraform workspace new staging
terraform workspace select staging
````

Ensure that Secret Manager API is enabled, and all secrets are in place.

Make sure that the backend image is stored in Artifact Registry ( More info in root `README`)

Plan changes, make sure they look OK, then apply
```
terraform plan
terraform apply
```

destroy resources with 

```
terraform destroy
```

