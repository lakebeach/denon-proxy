FROM node:lts-alpine
ENV NODE_ENV=production
ENV AVR_HOST=denon.nu
ENV WEB_PORT=8080

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and install dependencies
COPY package*.json /usr/src/app/
RUN npm install --omit=dev

# Copy everything else
COPY ./dist /usr/src/app/dist
COPY ./src /usr/src/app/src

# Expose the web service port
EXPOSE ${WEB_PORT}

CMD node . ${AVR_HOST} ${WEB_PORT}
