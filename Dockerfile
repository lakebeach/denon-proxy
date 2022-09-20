# build environment
FROM node:lts-alpine as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm i --quiet && \
    npm cache clean --force
COPY . ./
RUN npm run build

# production environment
FROM node:lts-alpine
ENV NODE_ENV=production
ENV AVR_HOST=denon.nu
ENV WEB_PORT=8080

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy everything else
COPY --from=builder /usr/app/dist ./dist
COPY ./src/proxy.js ./src/
COPY ./src/backend ./src/backend

# Expose the web service port
EXPOSE ${WEB_PORT}

CMD node . ${AVR_HOST} ${WEB_PORT}
