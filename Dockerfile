# Etapa 1: Construir o aplicativo React
FROM node:14 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Executar o aplicativo em um servidor Nginx leve
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# O arquivo de configuração do Nginx padrão é substituído pelo nosso próprio arquivo de configuração personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
