# Use the official PHP image with Apache
FROM php:8.2-apache

# Copy application files to the container
COPY . /var/www/html

# Expose port 80
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
