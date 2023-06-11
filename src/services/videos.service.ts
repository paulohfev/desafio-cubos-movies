import theMovieDBAPIClient from "../app/axios";
import { ObterVideosResposta } from "../interfaces/ObterVideos";

export default class VideosService {
  static obterVideoFilmePorID = async (id: string): Promise<ObterVideosResposta> => {
    const response = await theMovieDBAPIClient.get(`/movie/${id}/videos`);
    return response.data;
  }
}
