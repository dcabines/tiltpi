FROM arm32v6/node:alpine

WORKDIR /root/
ADD ./package.json ./package.json

RUN npm i
ADD ./index.js ./index.js

EXPOSE 80
CMD ["npm", "start"]