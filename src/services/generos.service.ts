import theMovieDBAPIClient from "../app/axios";
import { ObterGenerosResposta } from "../interfaces/ObterGeneros";

export default class GenerosService {
  static obterGeneros = async (): Promise<ObterGenerosResposta> => {
    const response = await theMovieDBAPIClient.get(
      `/genre/movie/list`,
    );
    return response.data;
  }
}