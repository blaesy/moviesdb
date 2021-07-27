import React from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
background: #0D0D0D;
`;

const Heading = styled.div``;

const Content = styled.div`
width: 75%;
margin: 0 auto;
display: grid;
grid-template-columns: 16.666% 16.666% 16.666% 16.666% 16.666% 16.666%;

@media only screen and (max-width: 1500px) {
  & {
    grid-template-columns: 25% 25% 25% 25%;
  }
}

@media only screen and (max-width: 1000px) {
  & {
    grid-template-columns: 33.333% 33.333% 33.333%;
  }
}

@media only screen and (max-width: 850px) {
  & {
    grid-template-columns: 50% 50%;
  }
}

@media only screen and (max-width: 700px) {
  & {
    grid-template-columns: 100%;
  }
}
`;

const App = () => {

  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6bf95fd3e703002112a61e3408d3491d&sort_by=popularity.desc&page=${page}`).then(response => {
      setMovies(response?.data?.results);
      console.log(response);
    })

    axios.get(`https://api.themoviedb.org/3/configuration?api_key=6bf95fd3e703002112a61e3408d3491d`).then(response => {
      console.log(response);
    })

  }, [])

  return (
    <AppWrapper>
      <Heading></Heading>
      <Content>
      {movies?.map(item => 
        <MovieCard name={item?.original_title} image={item?.backdrop_path}></MovieCard>
      )}
      </Content>
      
    </AppWrapper>
  );
}

export default App;
