# cdn-service

A docker-based Node.js application that can be used as a CDN service for local development. 
The application allows running a service to be used solely for serving static and media files. It is to be used as a content delivery server application.

## usage
### Using pre-built docker container
``docker run --rm -d --name cdn -v /your/path:/app/data -p YOUR_DESIRED_PORT:8000 olfredos6/cdn-ss:10``
#### options:
- Volume: The server look into /app/data to serve static file. Mount this volume from your desired folder
- Port: The server listens on port 8000. Make sure to map it to your desired port.

### Building it yourself
Clone or download the repo and use the provided [Dockerfile](https://github.com/Olfredos6/cdn-service/blob/main/Dockerfile) to build the image
