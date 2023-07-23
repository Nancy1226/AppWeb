import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContainerTop = styled.div`
display: none;
  @media (min-width: 1024px) {
      width: 100vw;
      height: 10vh;
      position: relative;
      display: flex;
      justify-content: flex-start;
      &:hover{
       cursor: pointer;
      }

}`;

const StyledContainer = styled.div` //movil
    display: none;
    @media (min-width: 1024px) { //para pc
    /* border: 2px solid firebrick; */
    width: auto;
    height: auto;
    margin: 0% 1%;
    }

`;

const StyledContainerImg = styled.img`
    display: none;
    @media (min-width: 1024px) {
        /* border: 4px solid firebrick; */
        width: auto;
        height: auto;
        margin: 0% 1%;
    }
`;

function Img({src, name}) {
    return ( 
    <>
        <StyledContainerTop>
            <StyledContainer>
                <Link to={name}><StyledContainerImg src={src} /></Link>
            </StyledContainer>
        </StyledContainerTop>
    </> 
    );
}

export default Img;