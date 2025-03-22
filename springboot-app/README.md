# Learn Dockerfile with a springboot Project

This repository contains a springboot project that can be easily run using Docker. Follow the steps below to set up and run the project.

## Getting Started

**Note:** Ensure that the `Dockerfile` exists in the `springboot-app` directory before proceeding.

### 1. Clone the Repository
```sh
git clone https://github.com/DevOps-Lebondeveloppeur/docker-examples.git
cd docker-examples/springboot-app
```

### 2. Build the Docker Image
```sh
docker build -t springboot-app-image .
```

### 3. Run the Docker Container
```sh
docker run -d --name springboot-app-container -p 5007:8080 springboot-app-image
```

## Access the Application
Open your browser and navigate to:
```
http://localhost:5007
```
