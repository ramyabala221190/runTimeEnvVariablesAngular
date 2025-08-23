FROM node:alpine as node

WORKDIR /app

ENV NG_APP_ENV=development

COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm install
COPY . .

RUN npm run build
#Stage 2

FROM nginx:alpine

VOLUME /var/cache/nginx 

RUN rm -r /usr/share/nginx/html/*

COPY --from=node /app/dist/run-time-env-var-angular/browser/ /usr/share/nginx/html/

COPY docker/startup.envsh /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/startup.envsh
RUN sed -i 's/\r$//' /docker-entrypoint.d/startup.envsh