import { Video } from "./Video";

export interface ObterVideosResposta {
  id: number,
  results: Video[],
}
