# Learn Dockerfile with a react Project

This repository contains a react project that can be easily run using Docker. Follow the steps below to set up and run the project.

## Getting Started

**Note:** Ensure that the `Dockerfile` exists in the `react-app` directory before proceeding.

### 1. Clone the Repository
```sh
git clone https://github.com/DevOps-Lebondeveloppeur/docker-examples.git
cd docker-examples/react-app
```

### 2. Build the Docker Image
```sh
docker build -t react-app-image .
```

### 3. Run the Docker Container
```sh
docker run -d --name react-app-container -p 5006:80 react-app-image
```

## Access the Application
Open your browser and navigate to:
```
http://localhost:5006
```
