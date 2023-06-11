import theMovieDBAPIClient from "../app/axios";
import { DetalhesFilme } from "../interfaces/DetalhesFilme";
import { ObterFilmesParams, ObterFilmesResposta } from "../interfaces/ObterFilmes";

export default class FilmesService {
  static obterFilmesPorPesquisa = async (params?: ObterFilmesParams): Promise<ObterFilmesResposta> => {
    const response = await theMovieDBAPIClient.get(`/search/movie`, { params });
    return response.data;
  }

  static obterTodosFilmes = async (paginaAtual: number): Promise<ObterFilmesResposta> => {
    const params = { page: paginaAtual };

    const response = await theMovieDBAPIClient.get('/discover/movie', { params });
    return response.data;
  }

  static obterDetalhesFilmePorID = async (id: string): Promise<DetalhesFilme> => {
    const response = await theMovieDBAPIClient.get(`/movie/${id}`);
    return response.data;
  }
}
