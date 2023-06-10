const obterFilmes = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_CHAVE}&language=pt-BR`
  );
  return response.json();
}

export const FilmesService = {
  obterFilmes,
};
