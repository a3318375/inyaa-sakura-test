FROM node:16-alpine3.14
WORKDIR /home
ADD . .
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn
RUN yarn build
EXPOSE 5000
CMD ["yarn", "serve"]

