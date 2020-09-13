FROM node:lts-alpine

WORKDIR /tmp/app

COPY . .

RUN yarn install

# RUN yarn install && yarn build

# FROM node:lts-alpine

# WORKDIR /srv/

# COPY --from=0 /tmp/app/dist/ .
# COPY --from=0 /tmp/app/node_modules/ .

# CMD node ./dist/app/index.js
CMD yarn dev
