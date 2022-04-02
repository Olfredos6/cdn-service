FROM node:14
COPY ./src /app
WORKDIR /app
VOLUME /app/data
CMD npm start