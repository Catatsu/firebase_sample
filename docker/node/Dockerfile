FROM node:6-alpine

RUN apk --no-cache --update add \
git \
curl

RUN npm i -g \
firebase-tools \
node-firestore-import-export

WORKDIR /app

ENV HOST 0.0.0.0

EXPOSE 80

EXPOSE 9005

EXPOSE 5000
