import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
`;

const ContainerButton = styled.button`
    width: 70%;
    height: 40%;
    background: #71ACDF;
    border-radius: 10px;
    text-align: center;
    font-size: 1.5625rem;
    font-family: Inter;
    font-weight: 800;
    border: none;
    margin-top:4%;
    color: white;
`;  

function Button({funcion, name}) {
    return ( 
    <>
    <StyledContainer>
        <ContainerButton type="button" onClick={funcion}>{name}</ContainerButton>
    </StyledContainer>
    </> 
);
}

export default Button;