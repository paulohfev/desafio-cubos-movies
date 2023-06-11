import { GeneroFilme } from "./GeneroFilme";
import { IdiomasFaladasFime } from "./IdiomasFaladasFilme";

export interface DetalhesFilme {
  budget: number,
  genres: GeneroFilme[],
  id: number,
  original_language: string,
  overview: string,
  poster_path: string,
  release_date: string,
  revenue: number,
  runtime: number,
  status: string,
  spoken_languages: IdiomasFaladasFime[],
  title: string,
  vote_average: number,
}
