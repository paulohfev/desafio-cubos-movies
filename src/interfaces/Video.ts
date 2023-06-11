export enum VideoSite {
  youtube = "YouTube",
  vimeo = "Vimeo",
}

export interface Video {
  id: string,
  iso_639_1: string,
  iso_3166_1: string,
  key: string,
  name: string,
  official: boolean,
  published_at: string,
  site: VideoSite,
  size: number
  type: string
}