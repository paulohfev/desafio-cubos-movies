import { Filme } from "./Filme"

export interface ObterFilmesParams {
  query: string
}

export interface ObterFilmesResposta {
  page: number,
  results: Filme[],
  total_pages: number,
  total_results: number,
}