FROM node:9-alpine as builder
MAINTAINER Gustavo Paulo <gustavo.paulo.segura@gmail.com>

# install dependencies
WORKDIR /usr/src/app
ADD package.json yarn.lock ./
RUN yarn --pure-lockfile --no-cache

# build
ADD . ./
RUN yarn build

# create nginx image
FROM nginx:alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
