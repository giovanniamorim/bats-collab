# Projeto BATS Collab

Este projeto é uma aplicação de exemplo que demonstra a criação de um site colaborativo e interativo. O objetivo é apresentar seções dinâmicas e conteúdo estático de forma eficiente e organizada, utilizando HTML, CSS e JavaScript.

## Overview

O projeto consiste em uma estrutura de página com seções distintas, como "Quem Somos", "Galeria", e "Contate-nos". A navegação entre essas seções é realizada via carregamento assíncrono de conteúdo, usando requisições AJAX para carregar partes do site dinamicamente. Além disso, ele utiliza um **servidor local** para carregar os arquivos HTML e recursos, evitando problemas de CORS (Cross-Origin Resource Sharing) ao acessar arquivos locais diretamente no navegador.

## Como executar

Para executar o projeto localmente, você pode utilizar qualquer uma das opções abaixo. Isso irá configurar um servidor local para servir o conteúdo da aplicação e permitir o carregamento dinâmico de recursos.

### Opção 2: Usando Node.js e http-server

1. Instale o [Node.js](https://nodejs.org/) no seu sistema, se ainda não o fez.
   
2. Após a instalação do Node.js, instale o pacote `http-server` globalmente usando o comando:
   
   ```bash
   npm install -g http-server
3. Depois da instalação, navegue até o diretório onde seu projeto está localizado e inicie o servidor com o seguinte comando: 
    
    ```bash
    http-server .
4. O servidor irá rodar na porta padrão (geralmente 8080). Abra o navegador e acesse:

    ```bash
    http://localhost:8080
    