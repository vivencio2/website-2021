FROM node:12-alpine as build-step
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.19.2-alpine
RUN rm -rf  /usr/share/nginx/html/*

COPY --from=build-step /app/dist/gdgph usr/share/nginx/html