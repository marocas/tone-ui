FROM node:15.14.0-alpine
RUN apk add --update --no-cache curl py-pip make g++

WORKDIR /app

COPY . .
RUN yarn

CMD ["yarn", "start"]
