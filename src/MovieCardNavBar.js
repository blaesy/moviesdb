import React  from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import axios from 'axios';

const Wrapper = styled.div`
width: 80%;
margin: 50px auto;
display: grid;
grid-template-columns: 25% 25% 25% 25%;

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

const MovieCardHeading = ({allGenres}) => {

    const [popularMovies, setPopularMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6bf95fd3e703002112a61e3408d3491d&sort_by=popularity.desc`).then(response => {
            setPopularMovies(response?.data?.results?.slice(0, 4));
            console.log(response?.data?.results);
        });
    }, [])

    return (
        <Wrapper>
        {
        popularMovies?.map(item => <MovieCard desc={item?.overview} allGenres={allGenres} genres={item?.genre_ids} rating={item?.vote_average} height="500" name={item?.original_title} image={item?.poster_path}></MovieCard>)
        }
        </Wrapper>
    )
}

export default MovieCardHeading;