# Learn Dockerfile with a vue Project

This repository contains a vue project that can be easily run using Docker. Follow the steps below to set up and run the project.

## Getting Started

**Note:** Ensure that the `Dockerfile` exists in the `vue-app` directory before proceeding.

### 1. Clone the Repository
```sh
git clone https://github.com/DevOps-Lebondeveloppeur/docker-examples.git
cd docker-examples/vue-app
```

### 2. Build the Docker Image
```sh
docker build -t vue-app-image .
```

### 3. Run the Docker Container
```sh
docker run -d --name vue-app-container -p 5008:80 vue-app-image
```

## Access the Application
Open your browser and navigate to:
```
http://localhost:5008
```
