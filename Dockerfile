FROM nginxinc/nginx-unprivileged 
EXPOSE 8080
COPY ./html/ /usr/share/nginx/html
