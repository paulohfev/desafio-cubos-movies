# Desafio Listagem de Filmes

Este projeto foi criado utilizando React.js, Redux Toolkit e Docker.

## Observações

- Devido a limitações da API themoviedb, não foi possível limitar o número de resultados de filmes na página inicial em 5. O suporte para isso parece ter sido removido. Assim, haverá no máximo 20 resultados de filmes por página.

- O parâmetro de consulta `idioma` (usado de acordo com as instruções na documentação da API) não conseguiu traduzir adequadamente os campos "status" e "idioma original do filme". Dessa forma, usei uma solução alternativa mapeada por meio de objetos de dados para extrair os valores traduzidos. Consulte o diretório `data` para obter mais contexto.

## Começando

Certifique-se de ter [Node](https://nodejs.org/), [Docker](https://www.docker.com/) e [Docker-Compose](https://docs.docker.com/compose/) instalado.

Dentro do diretório raiz do projeto, execute o comando `docker compose build`. Isso criará uma imagem do contêiner que encapsula a presente solução.

Dentro do diretório raiz, certifique-se de criar também um arquivo `.env`. Certifique-se de adicionar variáveis de ambientes com base no arquivo `.env.example`.

Você precisará dos seguintes valores:

- REACT_APP_MOVIEDB_API_CHAVE -> esta é a chave da API do themoviedb, para a qual você precisará se registrar no themoviedb para obter. Para referência - [aqui](https://developer.themoviedb.org/docs)

- REACT_APP_MOVIEDB_API_URL=https://api.themoviedb.org/3

## Commandos disponivéis

Para rodar o projeto localmente, dentro do diretório root:

### `npm run docker:start:dev`

Roda a aplicação em um ambiente de desenvolvimento, dentro de um container Docker.
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo dentro do navegador.

<hr />

# Film Listing Challenge

This solution was created using React.js, Redux Toolkit, Redux Persist and Docker.

## Observations

- Due to limitations from the themoviedb API, it wasn't possible to limit the number of film results on the homepage by 5. Support for this seems to have been removed. As such, there will be at most 20 films results per page, at most.

- The `language` query param (used per instructions in the API documentation) wasn't able to appropriate translate the "status" and "film original language" fields. As such, I used a workaround that mapped through data objects to extract the translated values. Please refer to the `data` directory for more context.

## Getting started

Be sure to have [Node](https://nodejs.org/), [Docker](https://www.docker.com/) and [Docker-compose](https://docs.docker.com/compose/) installed.

Inside the root directory of the project, run the command `docker compose build`. This will build an image of the container that encapsulates the present solution.

Inside the root directory, be sure to also create an `.env` file. Be sure to add environments variables based on the `.env.example` file.

You will need the following values:

- REACT_APP_MOVIEDB_API_CHAVE -> this is the themoviedb API key, to which you will need to register at themoviedb to gain. For reference - [here](https://developer.themoviedb.org/docs)

- REACT_APP_MOVIEDB_API_URL=https://api.themoviedb.org/3

## Available Scripts

To run the project locally, from the root directory:

### `npm run docker:start:dev`

Runs the app in the development mode in a Dockerized container.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
