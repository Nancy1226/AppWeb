import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { images } from "../../images/images";
import Image from "../atoms/Image";

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5%;
    margin: 2% 0% 4% 0%;
    @media (min-width: 1024px) {
        /* border: 2px solid red; */
        display: flex;
        justify-content: center;
        width: 100%;
        height: 50px;
        margin: 0%;
        background-color: #CFE5F4;
        gap: 80%;
    }
`;

const StyledSubContainer = styled.div`
    width: 22%;
    height: 35%;
    justify-content: center;
    align-items: center;
    /* display: none; */

    @media (min-width: 1024px) {
        /* border: 4px solid black; */
        width: auto;
    }
`;

const StyledSpan = styled.span`
         display: none;
     @media (min-width: 1024px) {
        display: flex;
        font-size: 1.2rem;
    }
`;

function GroupNav() {
    return ( 
    <>
    <StyledContainer>
        
            <StyledSubContainer>
                 <Image src={images.homeIcon} name={"/"} />
                 <NavLink to={"/Grafica"} className='nav' exact activeClassName="active">
                        <StyledSpan className="text">Grafica</StyledSpan>
                    </NavLink>

            </StyledSubContainer>

            <StyledSubContainer>
                <Image src={images.graphIcon} name={"/"} />
                <NavLink to={"/"} className='nav' exact activeClassName="active">
                        <StyledSpan className="text">Salir</StyledSpan>
                    </NavLink>
            </StyledSubContainer>
        </StyledContainer> 


    </>
     );
}

export default GroupNav;