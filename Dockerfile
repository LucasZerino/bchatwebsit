# Use a imagem base do Node.js
FROM node:18.4.0-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os diretórios do seu sistema de arquivos local para o contêiner
COPY ./studio /app/studio
COPY ./web /app/web

# Instale as dependências do projeto
RUN yarn install

# Instale as dependências do studio
WORKDIR /app/studio
RUN yarn install

# Instale as dependências do web
WORKDIR /app/web
RUN yarn install

# Expõe as portas para acesso externo
EXPOSE 3333
EXPOSE 8000

# Comando para iniciar os serviços
CMD ["sh", "-c", "cd /app/studio && yarn start & cd /app/web && yarn start"]
