FROM node:23-alpine

# esto es un comentario de linea simple

# creacion de directorio de trabajo en la imagen
WORKDIR /app

COPY package*.json ./

RUN npm install
# copia de  todos los archivos de la carpeta actual (gracias al primer punto) a la imagen en la carpeta de trabajo /app (WORKDIR) 
COPY . .


CMD [ "npm", "start" ]
# CMD [ "node", "src/app.js" ]