# node base-image
FROM node:20-alpine

# setting working directory to the "/app" dir in docker
WORKDIR /app

# copy package.json into "/app" dir - i.e the working dir inside docker
COPY package*.json ./

# install all dependencies from the package.json
RUN npm install

# copy in all our files from the current folder - into the working directory on docker
COPY ./ .

# set port
ENV PORT=3001

EXPOSE 3001

RUN npm run build

CMD ["npm", "run" ,"start"]