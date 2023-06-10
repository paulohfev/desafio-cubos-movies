import theMovieDBAPIClient from "../app/axios";
import { ObterFilmesParams, ObterFilmesResposta } from "../interfaces/ObterFilmes";

export default class FilmesService {
  static obterFilmesPorPesquisa = async (params?: ObterFilmesParams): Promise<ObterFilmesResposta> => {
    const response = await theMovieDBAPIClient.get(`/search/movie`, { params });
    return response.data;
  }

  static obterTodosFilmes = async (paginaAtual: number) => {
    const params: any = { page: paginaAtual };

    const response = await theMovieDBAPIClient.get('/discover/movie', { params });
    return response.data;
  }
}
