FROM node:9
WORKDIR /usr/src/app
COPY . .
RUN npm install --supress-warnings
ARG env_name
ENV NODE_ENV=$env_name
ENV PORT=1000
EXPOSE 1000
CMD [ "node", "server.js" ]
