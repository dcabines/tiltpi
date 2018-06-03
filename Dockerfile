FROM armhf/alpine
RUN apk --update add nodejs

WORKDIR /root/
ADD ./package.json ./package.json

RUN npm i
ADD ./index.js ./index.js

EXPOSE 80
CMD ["npm", "start"]