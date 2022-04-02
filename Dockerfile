FROM node:14
WORKDIR /app
RUN git clone https://github.com/Olfredos6/cdn-service.git .
WORKDIR /app/src
VOLUME /app/data
CMD npm start