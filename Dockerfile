FROM node:18.18.0

ARG PUBLIC_ALLOWED_DOMAINS
ENV PUBLIC_ALLOWED_DOMAINS ${PUBLIC_ALLOWED_DOMAINS}

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

COPY . /usr/src/nuxt-app/
RUN yarn install

RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "yarn", "start" ]