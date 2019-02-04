FROM nginx:1.15.8
MAINTAINER Travis Kern <kern.travis@gmail.com>

RUN apt update -y --fix-missing

RUN rm -rf /var/www/html/*
COPY build /var/www/html

RUN rm -rf /etc/nginx/conf.d/app.conf

COPY nginx.server.conf /etc/nginx/conf.d/app.conf

EXPOSE 80