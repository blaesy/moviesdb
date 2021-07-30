import React from 'react';
import styled from 'styled-components';
import backgroundImg from './background.jpg';
import { IoIosArrowDown, IoIosArrowRoundForward } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import MovieCardHeading from './MovieCardNavBar';

const NavWrapper = styled.div`

width: 100%;

&:before {
content: ' ';
display: block;
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 750px;
opacity: 0.2;
background: url(${backgroundImg});
background-size: cover;
filter: grayscale(100%);
z-index: 0;
}
`;

const NavTop = styled.div`
height: 100px;
position: relative;
width: calc(100% - 200px);
box-sizing: border-box;
padding: 0 50px;

display: flex;
align-items: center;

margin: 0 100px;
`;

const NavTopLogo = styled.span`
font-size: 32px;
font-weight: 900;
color: white;
margin: 0 100px 0 0;
`;

const CustomArrow = styled(IoIosArrowDown)`
margin: 0 0 0 10px;
transition: transform 100ms ease-in-out;
`;

const NavTopOptionExpanded = styled.ul`
position: absolute;
top: 50%;
left: 50%;
background: rgba(0,0,0,0.9);
color: white;
margin-top: 15px;
box-sizing: border-box;
padding: 15px 5px;
min-width: 200px;
list-style-type: none;
transform: translate(-50%, 0);
display: none;
z-index: 999;
`;

const NavTopOption = styled.span`
position: relative;
display: flex;
height: 100%;
align-items: center;
font-size: 18px;
font-weight: 300;
color: white;
margin: 0 15px;

&:hover {
    cursor: pointer;

    ${CustomArrow} {
        transform: rotate(180deg);
    }

    ${NavTopOptionExpanded} {
        display: block;
    }
}
`;

const NavTopOptionRight = styled.span`
position: relative;
display: flex;
height: 100%;
align-items: center;
font-size: 18px;
font-weight: 300;
color: white;
margin: 0 15px;
margin: 0 0 0 auto;

&:hover {
    cursor: pointer;

    ${CustomArrow} {
        transform: rotate(180deg);
    }

    ${NavTopOptionExpanded} {
        display: block;
    }
}
`;

const NavTopOptionExpandedItemRightArrow = styled(IoIosArrowRoundForward)`
margin-right: 20px;
opacity: 0;
font-size: 18px;
transition: all 300ms ease-in-out;
`;

const NavTopOptionExpandedItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
text-align: left;
padding: 5px 10px;
text-transform: uppercase;
white-space: nowrap;
font-size: 14px;

transition: all 100ms ease-in-out;

&:hover {
    cursor: pointer;
    margin-left: 10px;

    ${NavTopOptionExpandedItemRightArrow} {
        margin-right: 0px;
        opacity: 1;
    }
}
`;

const NavSearch = styled.div`
display: flex;
width: 60%;
height: 60px;
background: rgba(0, 0, 0, 0.7);
margin: 0 auto;
position: relative;
`;

const NavFilter = styled.div`
width: 200px;
height: 100%;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 30px;
box-sizing: border-box;
font-size: 18px;
border-right: 2px solid rgba(255,255,255,0.1);

&:hover {
    cursor: pointer;
}
`;

const SearchIcon = styled(BsSearch)`
position: absolute;
right: 0;
color: white;
top: 50%;
transform: translate(-50%, -50%);
font-size: 26px;
width: 60px;

&:hover {
    cursor: pointer;
}
`;

const NavSearchInput = styled.input`
width: calc(100% - 200px);
background: none;
outline: none;
border: none;
text-align: left;
box-sizing: border-box;
padding: 15px;
margin: 0;
font-size: 18px;
text-transform: uppercase;
color: white;
`;


const NavBar = ({genres}) => {

    return (
        <>
            <NavWrapper>
                <NavTop>
                    <NavTopLogo>MOVIE DB</NavTopLogo>
                    <NavTopOption>
                        CATEGORIES<CustomArrow />
                        <NavTopOptionExpanded>
                                <NavTopOptionExpandedItem>
                                    MOVIES
                                    <NavTopOptionExpandedItemRightArrow />
                                </NavTopOptionExpandedItem>
                                <NavTopOptionExpandedItem>
                                    TV
                                    <NavTopOptionExpandedItemRightArrow />
                                </NavTopOptionExpandedItem>
                        </NavTopOptionExpanded>
                    </NavTopOption>
                    <NavTopOption>
                        GENRES<CustomArrow />
                        <NavTopOptionExpanded>
                            {genres?.map(item => 
                                <NavTopOptionExpandedItem>
                                    {item?.name}
                                    <NavTopOptionExpandedItemRightArrow />
                                </NavTopOptionExpandedItem>)}
                        </NavTopOptionExpanded>
                    </NavTopOption>
                    <NavTopOptionRight>
                        HELP<CustomArrow />
                        <NavTopOptionExpanded>
                                <NavTopOptionExpandedItem>
                                    Contact Us
                                    <NavTopOptionExpandedItemRightArrow />
                                </NavTopOptionExpandedItem>
                                <NavTopOptionExpandedItem>
                                    FAQ
                                    <NavTopOptionExpandedItemRightArrow />
                                </NavTopOptionExpandedItem>
                                <NavTopOptionExpandedItem>
                                    Terms of Service
                                    <NavTopOptionExpandedItemRightArrow />
                                </NavTopOptionExpandedItem>
                        </NavTopOptionExpanded>
                    </NavTopOptionRight>
                </NavTop>
                <NavSearch>
                    <NavFilter>
                        FILTER
                        <CustomArrow />
                    </NavFilter>
                    <NavSearchInput placeholder="Search for a movie, or TV show...">
                    </NavSearchInput>
                    <SearchIcon />
                </NavSearch>
            </NavWrapper>
        </>
    )
}

export default NavBar;
