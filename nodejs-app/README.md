# Learn Dockerfile with a nodejs Project

This repository contains a nodejs project that can be easily run using Docker. Follow the steps below to set up and run the project.

## Getting Started

**Note:** Ensure that the `Dockerfile` exists in the `nodejs-app` directory before proceeding.

### 1. Clone the Repository
```sh
git clone https://github.com/DevOps-Lebondeveloppeur/docker-examples.git
cd docker-examples/nodejs-app
```

### 2. Build the Docker Image
```sh
docker build -t nodejs-app-image .
```

### 3. Run the Docker Container
```sh
docker run -d --name nodejs-app-container -p 5003:3000 nodejs-app-image
```

## Access the Application
Open your browser and navigate to:
```
http://localhost:5003
```
