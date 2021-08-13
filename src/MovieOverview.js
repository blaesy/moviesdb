import styled from 'styled-components';
import {AiOutlineCaretLeft} from 'react-icons/ai';

const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0,0,0,0.8);
z-index: 1;

transition: all .2s ease-in-out;
opacity: ${props => props.active ? '1' : '0'};
pointer-events: ${props => props.active ? 'auto' : 'none'};
`;

const TopImage = styled.div`
background: url('${props => props.img}');
width: 100%;
height: 100%;
background-size: 100%;
background-position: cover;
`;

const BottomPanel = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: 300px;
background: black;
z-index: 1;
box-shadow: 0 -10px 100px 100px black;
color: white;
`;

const BottomPanelInner = styled.div`
margin: 0 auto;
display: flex;  
width: 700px;
height: 100%;
box-sizing: border-box;
padding: 25px;
`;

const BottomPanelLeft = styled.div`
width: 75%;
height: 100%;

display: flex;
flex-direction: column;
`;

const BottomPanelRight = styled.div`
width: 25%;
height: 100%;
`;
const BottomTitle = styled.div`
font-size: 26px;
margin-bottom: 8px;
`;

const BottomDescription = styled.div`
text-align: justify;
text-justify: inter-word;
`;

const GoBackArrowWrapper = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
left: 0;
top: 0;
height: 100vh;
width: 100px;
z-index: 1;

&>* {
    transition: all .3s ease-in-out;
}

&:hover {
    cursor: pointer;
    &>*{
        margin-right: 25px;
    }
}
`;
// adult: false
// backdrop_path: "/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"
// genre_ids: [28, 12, 53, 878] (4)
// id: 497698
// original_language: "en"
// original_title: "Black Widow"
// overview: "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her pas…"
// popularity: 3267.6
// poster_path: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
// release_date: "2021-07-07"
// title: "Black Widow"
// video: false
// vote_average: 7.8
// vote_count: 4067

const MovieOverview = ({item, active, setActive}) => {
    console.log(item);
    return (
        <Wrapper active={active}>
            <TopImage img={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} />
            <BottomPanel>
                <BottomPanelInner>
                    <BottomPanelLeft>
                        <BottomTitle>{item?.original_title}</BottomTitle>
                        <BottomDescription>{item?.overview}</BottomDescription>
                    </BottomPanelLeft>
                    <BottomPanelRight></BottomPanelRight>
                </BottomPanelInner>
            </BottomPanel>
            <GoBackArrowWrapper onClick={() => setActive(false)}>
                <AiOutlineCaretLeft style={{color: 'rgba(200,200,200,1)', fontSize: '48px'}}/>
            </GoBackArrowWrapper>
        </Wrapper>
    )
}

export default MovieOverview;