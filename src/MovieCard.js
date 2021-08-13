import React from 'react';
import styled from 'styled-components';
import { GoStar } from 'react-icons/go';

const MovieCardWrapper = styled.div`
display: inline-block;
width: 100%;
height: 100%;
transition: all 300ms ease-in-out;
transform-style: preserve-3d;
position: relative;
`;

const MainWrapper = styled.div`
width: 100%;
height: ${props => props.height ? props.height + 'px' : '350px'};
padding: 10px;
box-sizing: border-box;

&:hover ${MovieCardWrapper} {
    cursor: pointer;
    transform: scale(1.05, 1.05);
    transform: rotateY(180deg);
}
`;

const MovieCardFront = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 100%;
overflow: hidden;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
background: url(${props => props.img});
background-size: cover;
background-position: center;
box-shadow: rgba(0, 0, 0, 1) 0px -42px 64px 12px inset;
border-radius: 10px;
`;

const MovieCardBack = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 100%;
overflow: hidden;
height: 100%;
padding: 25px;
box-sizing: border-box;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
background: rgba(0,0,0,0.5);
box-shadow: rgba(0, 0, 0, 1) 0px -42px 64px 12px inset;
border-radius: 10px;
transform: rotateY(180deg);
`;

const MovieTitle = styled.div`
display: flex;
align-items: flex-end;
width: 100%;
font-size: 18px;
text-transform: uppercase;
color: white;
margin: 2px;
white-space: nowrap;
overflow: hidden;
`;

const MovieFront = styled.div`
margin: 20px;
`;

const MovieGenre = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
`;

const Genre = styled.div`
display: flex;
height: 16px;
align-items: center;
color: white;
background: rgba(59, 105, 196, 1);
font-weight: 500;
color: white;
padding: 4px 8px;
margin: 2px;
border-radius: 5px;
font-size: 12px;
&:before {
    content: '${props => props.type}';
}
`;

const MovieRating = styled.div`
display: flex;
align-items: center;
margin: 2px;
color: white;

& > span {
    font-size: 22px;
}
`;

const Star = styled(GoStar)`
font-size: 26px;
margin: 5px;
`;

const MovieDescription = styled.div`
color: white;
margin: 15px 2px 2px 2px;
font-size: 1rem;
max-height: 90%;
overflow: hidden;
`;

const MovieCard = ({height, name, image, genres, rating, allGenres, desc, onClick}) => {
    return (
        <MainWrapper height={height} onClick={onClick}>
            <MovieCardWrapper>
                <MovieCardFront img={`https://image.tmdb.org/t/p/w780${image}`}>
                    <MovieFront>
                        <MovieGenre>{genres?.map(item => <Genre type={allGenres?.find(elem => elem?.id === item)?.name}></Genre>)}</MovieGenre>
                        <MovieTitle>{name}</MovieTitle>
                        <MovieRating>
                            <Star /><span>{rating}</span>/10
                        </MovieRating>
                    </MovieFront>
                </MovieCardFront>
                <MovieCardBack>
                    <MovieTitle>
                        {name}
                    </MovieTitle>
                    <MovieDescription>
                        {desc}
                    </MovieDescription>
                </MovieCardBack>
            </MovieCardWrapper>
        </MainWrapper>
    )
}

export default MovieCard;