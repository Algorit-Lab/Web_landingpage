# Use Node.js as the base image
FROM node:16

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json, package-lock.json and the rest of the code to the Docker container
COPY . .

# Install dependencies in the Docker container
RUN npm install

# Install Nginx
RUN apt-get update && apt-get install -y nginx

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 9090

# Start Nginx
CMD service nginx start && npm start
