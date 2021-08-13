import React from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './MovieCard';
import styled from 'styled-components';
import NavBar from './NavBar';
import MoviesBody from './MoviesBody';
import MovieCardHeading from './MovieCardNavBar';
import MovieOverview from './MovieOverview';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 0 0 100px 0;
background: #0D0D0D;
`;

const Heading = styled.div`
`;

const Content = styled.div`
display: flex;
flex-wrap: nowrap;
overflow: hidden;
width: calc(100% - 200px);
box-sizing: border-box;
margin: 0 100px;
padding: 25px;
min-height: 600px;
`;

const ContentLeft = styled.div`
width: calc(100% - 15px);
height: 100%;
margin: 10px 5px 10px 10px;
`;

const ContentRight = styled.div`
width: calc(0% - 15px);
height: 100%;
margin: 10px 10px 10px 5px;
`;

const ContentLeftTitle = styled.span`
font-size: 26px;
color: white;
padding: 10px;
`;

const ContentLeftFiltersWrapper = styled.div`
position: sticky;
display: flex;
height: 50px;
padding: 10px;
align-items: center;
`;

const ContentLeftFilter = styled.div`
position: relative;
color: white;
text-transform: uppercase;
margin: 0 50px 0 0;

&:after {
  display: block;
  content: ' ';
  border-bottom: 1px solid gray;
  width: 75%;
  margin: 0 auto;
  transform: scaleX(${props => props.active ? '1' : '0'});
  padding-bottom: 5px;
  box-sizing: border-box;
  transition: all 100ms ease-in-out;
}

&:hover {
  cursor: pointer;
}

&:hover:after {
  transform: scaleX(1);
}
`;

const ContentLeftMoviesWrapper = styled.div`
width: 100%;
margin: 20px auto;
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;

@media only screen and (max-width: 1350px) {
    & {
      grid-template-columns: 33.333% 33.333% 33.333%;
    }
  }
  
  @media only screen and (max-width: 900px) {
    & {
      grid-template-columns: 50% 50%;
    }
  }
  
  @media only screen and (max-width: 500px) {
    & {
      grid-template-columns: 100%;
    }
  }
`;

const App = () => {

  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [activeId, setActiveId] = React.useState(1);
  const [openMovie, setOpenMovie] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState({});

  React.useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=6bf95fd3e703002112a61e3408d3491d&page=${page}`).then(response => {
      setMovies(response?.data?.results);
      console.log(response);
    });

    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=6bf95fd3e703002112a61e3408d3491d&language=en-US`).then((response) => {
        setGenres(response?.data?.genres);
    })
  }, [])

  const searchFor = async (search, id) => {
    switch(search) {
      case 'popular':
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6bf95fd3e703002112a61e3408d3491d`).then(response => {
          setMovies(response?.data?.results);
          setActiveId(1);
        });
        return;
      case 'upcoming':
        await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=6bf95fd3e703002112a61e3408d3491d`).then(response => {
          setMovies(response?.data?.results);
          setActiveId(2);
        });
        return;
      case 'rating':
        await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=6bf95fd3e703002112a61e3408d3491d`).then(response => {
          setMovies(response?.data?.results);
          setActiveId(3);
        });
        return;
      default: 
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6bf95fd3e703002112a61e3408d3491d`).then(response => {
          setMovies(response?.data?.results);
          setActiveId(1);
        });
        return;
    }
  }

  const openMovieOveriew = (item) => {
    setOpenMovie(true);
    setCurrentItem(item);
  }

  return (
    <AppWrapper>
      <MovieOverview item={currentItem} active={openMovie} setActive={setOpenMovie} />
      <NavBar genres={genres}/>
      <MoviesBody />
      <MovieCardHeading allGenres={genres}/>
      <Content>
        <ContentLeft>
          <ContentLeftTitle>ALL MOVIES...</ContentLeftTitle>
          <ContentLeftFiltersWrapper>
            <ContentLeftFilter active={1 === activeId} onClick={() => searchFor('popular', 1)}>popular</ContentLeftFilter>
            <ContentLeftFilter active={2 === activeId} onClick={() => searchFor('upcoming', 2)}>upcoming</ContentLeftFilter>
            <ContentLeftFilter active={3 === activeId} onClick={() => searchFor('rating', 3)}>highest rating</ContentLeftFilter>
          </ContentLeftFiltersWrapper>
          <ContentLeftMoviesWrapper>
            {movies?.map(item => <MovieCard onClick={() => openMovieOveriew(item)} desc={item?.overview} rating={item?.vote_average} height="400" name={item?.original_title} image={item?.poster_path}></MovieCard>)}
          </ContentLeftMoviesWrapper>
        </ContentLeft>
        <ContentRight></ContentRight>
      </Content>
      
    </AppWrapper>
  );
}

export default App;
