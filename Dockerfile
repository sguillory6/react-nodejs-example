FROM node:14
WORKDIR /root/
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/config.js ./api/
COPY api/connection.js ./api/
COPY api/server.js ./api/
COPY api/User.model.js ./api/

ENV MONGODB_HOST localhost
ENV MONGODB_PORT 27017
ENV MONGODB_DATABASE mongo-test
ENV MONGODB_USERNAME ""
ENV MONGODB_PASSWORD ""

EXPOSE 3080

CMD ["node", "./api/server.js"]