FROM node:12-alpine

WORKDIR /usr/src/app

ADD package.json .
ADD yarn.lock .

RUN yarn

COPY . .

CMD ["yarn", "serve"]
