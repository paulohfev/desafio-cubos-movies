import React from 'react';
import ReactPlayer from "react-player"
import { Video, VideoSite } from '../../interfaces/Video';
import styles from './ListaVideos.module.scss';

type Props = {
  listaVideos: Video[];
};

const ListaVideos: React.FC<Props> = ({ listaVideos }) => {
  const renderizarVideos = () => {
    return listaVideos.map((video) => {
      const videoUrl =
        video.site === VideoSite.youtube ? (
          `https://www.youtube.com/embed/${video.key}`
        ) : (
          `https://vimeo.com/${video.key}`
        );

      return (
        <div className={styles.video} key={video.id}>
          <ReactPlayer
            url={videoUrl}
            height="100%"
            width="100%"
          />
        </div>
      );
    });
  };

  return (
    <div className={styles.lista}>
      {renderizarVideos()}
    </div>
  )
};

export default ListaVideos;
