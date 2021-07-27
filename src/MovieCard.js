import React from 'react';
import styled from 'styled-components';

const MovieCardWrapper = styled.div`
display: inline-block;
width: 100%;
height: 100%;
transition: all 400ms ease-in-out;
transform-style: preserve-3d;
position: relative;


`;

const MainWrapper = styled.div`
width: 100%;
height: 350px;
padding: 10px;
box-sizing: border-box;

&:hover ${MovieCardWrapper} {
    cursor: pointer;
    transform: scale(1.1, 1.1);
}

`;

const MovieCardFront = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
background: url(${props => props.img});
background-size: cover;
background-position: center;
`;

const MovieCardBack = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
background: blue;
transform: rotateY(180deg);
`;

const MovieCard = ({name, image}) => {
    return (
        <MainWrapper>
            <MovieCardWrapper>
                <MovieCardFront img={`https://image.tmdb.org/t/p/w780${image}`}>{name}</MovieCardFront>
                <MovieCardBack>XD</MovieCardBack>
            </MovieCardWrapper>
        </MainWrapper>
    )
}

export default MovieCard;