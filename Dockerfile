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
ENV WS_PORT=8090

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and install dependencies
COPY --chown=node:node package*.json ./
RUN npm install --omit=dev

# Copy everything else
COPY --chown=node:node --from=builder /usr/app/dist ./dist
COPY --chown=node:node ./src/proxy.js ./src/
COPY --chown=node:node ./src/backend ./src/backend

# Expose the web service port
EXPOSE ${WEB_PORT} ${WS_PORT}

USER node
CMD node . ${AVR_HOST} ${WEB_PORT} ${WS_PORT}
