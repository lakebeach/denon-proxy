FROM node:lts-alpine
ENV NODE_ENV=production
ENV AVR_HOST=denon.nu

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy and install dependencies
COPY package*.json /usr/src/app/
RUN npm install --omit=dev

# Copy everything else
COPY ./src /usr/src/app/src

# Expose the web service port
EXPOSE 8080 8090

CMD node . ${AVR_HOST} 8080 8090
