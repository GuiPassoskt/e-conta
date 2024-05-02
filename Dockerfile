FROM node:21 AS builder
WORKDIR /app
COPY . .
RUN command
RUN npm install
RUN npm run pwa

FROM nginx:alpine
COPY --from=builder /app/dist/pwa usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]