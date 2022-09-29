FROM node:alpine as builder

WORKDIR "/usr/src/app"
COPY package.json ./
RUN npm install --legacy-peer-deps
copy ./ ./
# CMD ["npm", "run", "build"]
RUN npm run build
# COPY ./build ./build

FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]