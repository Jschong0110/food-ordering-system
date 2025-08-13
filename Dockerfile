FROM bitnami/apache:latest 

  

# Copy our custom website files into the container 

COPY index.html /app/index.html 

COPY about.html /app/about.html 

  

# Expose port 8080 (Bitnami Apache uses this port) 

EXPOSE 8080 

  

# Add a label to identify our custom imcat age 

LABEL description="My Custom Apache Server" 

LABEL version="1.0" 

LABEL student="Jschong" 


