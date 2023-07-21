import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div` //movil
    /* border: 2px solid yellow; */
    width: 64%;

    /* justify-content:center; */
    /* align-items: center; */
    /* margin-left: 25%; */
    /* display: flex; */
    /* justify-content: space-evenly; */
`;


const StyledContainerImg = styled.img`
    width: 100%;
    height: 100%;
    @media (min-width: 1024px) {
      /* border: 4px solid firebrick; */
        width: 40%;
        height: 100%;
        margin: 0% 1%;
        display: none;
    }
`;

function Image({src, name}) {
    return (
        <>
            <StyledContainer>
                <Link to={name}><StyledContainerImg src={src} /></Link>
            </StyledContainer>
        </>
      );
}

export default Image;