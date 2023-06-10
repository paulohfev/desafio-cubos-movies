const obterGeneros = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_API_CHAVE}&language=pt-BR`
  );
  return response.json();
}

export const GenerosService = {
  obterGeneros,
};
