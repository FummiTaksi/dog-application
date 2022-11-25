# dog-application

Application which purpose is to practice software development and store dogs.


### Prerequisities
Docker


## How to run locally


### Production 

```
docker-compose -f docker-compose-prod.yml up
```

And open `localhost:8080`


## Build backend

`gcloud builds submit --tag europe-north1-docker.pkg.dev/efi-ig-iac-2022/dog-application/dog-api `