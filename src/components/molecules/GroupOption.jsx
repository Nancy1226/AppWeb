import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import Button from "../atoms/Button";
import "../styles/Nav.css";


const StyledContainer = styled.div` //caja padre
    display: flex;
    justify-content: center;
    /* justify-content: space-evenly; */
    /* flex-direction: row; */
    /* flex-direction: column; */
    /* border:1px solid red;  */
    background-color : #E6E6E6;
    border-radius: 10px;
    background: #E6E6E6;
    /* padding: 1em 1em; */
    width: 100%;
    height: 100%; 
    padding: 0% 1% 1% 0%;
    @media (min-width:1024px){
        
    }`;

    const StyledContainerDiv = styled.div`
    width: 100%;
    height: 80%;
    border: 2px solid rebeccapurple;
    `;

function GroupOption() {
    return ( 
        <>
        {/* <StyledContainer>
            <StyledContainerDiv>
            <Button funcion={"funcion"} name={"Rotoplas"}></Button>
            </StyledContainerDiv>

            <StyledContainerDiv>
            </StyledContainerDiv>
            
        </StyledContainer> */}

<section id="sidebar">
    <div className="side-menu top">    
                <li>
                    <NavLink to={"/Rotoplas"} className='nav' exact activeClassName="active">
                        <span className="text">Rotoplas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Cisterna"} className='nav' exact activeClassName="active">
                        <span className="text">Cisterna</span>
                    </NavLink>
                </li>
    </div>
    </section>

        </>
     );
}

export default GroupOption;