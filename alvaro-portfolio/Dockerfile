FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN CI=1 npm run build -- --configuration production --no-progress

FROM nginx:alpine
COPY --from=build /app/dist/alvaro-portfolio/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
