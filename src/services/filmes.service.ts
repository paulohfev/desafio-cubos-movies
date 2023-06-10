import theMovieDBAPIClient from "../app/axios";
import { ObterFilmesParams } from "../interfaces/ObterFilmes";

export default class FilmesService {
  static obterFilmes = async (params?: ObterFilmesParams): Promise<any> => {
    const response = await theMovieDBAPIClient.get(
      `/search/movie`,
      { params }
    );
    return response.data;
  }
}
