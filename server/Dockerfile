FROM node:14-alpine

ADD package.json /tmp/package.json

RUN rm -rf dist

RUN cd /tmp && npm install -q

RUN npm dedupe

# Code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src

RUN npm run builde

RUN npm install pm2 -g

EXPOSE 4000

CMD ["node", "build/src/app.js"]