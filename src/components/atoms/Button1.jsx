import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
`;

const StyledButton = styled.button`
background: #006ECE;
border-radius: 12px;
text-align: center;
font-size: 20px;
font-family: Noto Serif;
color: #fff;
padding: 3% 28%;
border: none;
margin-top:4%;
width:100%;  //Cambio vigilado -Borrar en caso de ser necesario
&:hover{
    cursor: pointer;
    transition: background-color .7s;
}
    @media (min-width:1024px) {
        padding:${props => props.estilo ? '4% 32%' : '4% 32%'};
    }

`;

function Button1({name, estilo, funcion}) {
    return ( 
    <>
    <StyledContainer>
        <StyledButton type={"button"} estilo={estilo} onClick={funcion}>{name}</StyledButton>
    </StyledContainer>
    </>
     );
}

export default Button1;