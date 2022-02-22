FROM node:latest

RUN apt-get update -y
RUN apt-get install -y apt-utils sudo protobuf-compiler

WORKDIR /app/nodejs-ts
COPY . .
RUN sudo npm install

EXPOSE 3001

CMD ["yarn", "dev"]
