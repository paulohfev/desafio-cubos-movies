import React from 'react';
import styles from './PaginaHome.module.scss';

const PaginaHome: React.FC = () => {
  // const [filmes, setFilmes] = useState([]);

  // useEffect(() => {
  //     getFilmes()
  // },[])

  // const getFilmes = async () => {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_CHAVE}`
  //   );
  //   const data = await response.json()
  //   setFilmes(data.results)
  //   console.log(data)
  // }

  return (
    <div className={styles.container}>
      <div className={styles['container-campo']}>
        <input className={styles['campo']} placeholder="Busque um filme por nome, ano ou gênero" />
      </div>
    </div>
  )
};

export default PaginaHome;
