FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JS files to the container
COPY . .

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
