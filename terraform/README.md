# Terraform

### Prerequisities

- Terraform version 1.3.1
- Google cloud CLI



## Setup

Ensure that you are on current gcloud project with `gcloud config get-value project`

When using first time or when using new modules

```
terraform init
```


### Apply changes

Select correct workspace:

````
terraform workspace select staging
````

Plan changes, make sure they look OK, then apply
```
terraform plan
terraform apply
```

destroy resources with 

```
terraform destroy
```

