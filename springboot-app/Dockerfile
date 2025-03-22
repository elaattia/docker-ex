# Step 1: Build the application
FROM maven:3.8.4-openjdk-17-slim AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Step 2: Create the runtime environment
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar /app/demo.jar

# Step 9: Expose port 80 for the container
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "demo.jar"]
