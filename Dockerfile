# Use a simple web server (nginx)
FROM nginx:alpine

# Remove the default nginx page
RUN rm /usr/share/nginx/html/*

# Copy *your* index.html to nginx html folder
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
