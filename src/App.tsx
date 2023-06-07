import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
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
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
