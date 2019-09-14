FROM node:10.16.0-alpine

ADD . /code
WORKDIR /code
RUN yarn install
# RUN yarn run next
