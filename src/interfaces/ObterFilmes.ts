import { Filme } from "./Filme"

export interface ObterFilmesParams {
  page: number,
  query: string,
}

export interface ObterFilmesResposta {
  page: number,
  results: Filme[],
  total_pages: number,
  total_results: number,
}