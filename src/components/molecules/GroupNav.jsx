import styled from "styled-components";
import Image from "../atoms/Image";
import { images } from "../../images/images";

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5%;
    /* border: 4px solid rebeccapurple; */
    margin: 2% 0% 4% 0%;
    /* gap: 20%; */
  &:hover{
   cursor: pointer;
  }
  @media (min-width: 1024px) {
    width: 98vw;
    height: 10vh;
    /* position: relative; */
    display: flex;
    justify-content: space-around;
    gap: 60%;
  }
`;

const StyledSubContainer = styled.div`
    /* border: 4px solid black; */
    width: 22%;
    height: 35%;
    justify-content: center;
    align-items: center;
`;

function GroupNav() {
    return ( 
    <>
        <StyledContainer>
            <StyledSubContainer>
                 <Image src={images.homeIcon} name={"/"} />
            </StyledSubContainer>

            <StyledSubContainer>
                <Image src={images.graphIcon} name={"/"} />
            </StyledSubContainer>
        </StyledContainer> 


    </>
     );
}

export default GroupNav;