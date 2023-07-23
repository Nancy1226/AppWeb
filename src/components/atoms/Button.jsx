import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (min-width: 1024px) {
    display: flex;
    width: 50%;
    height: 80%;
    } 
`;

const ContainerButton = styled.div`
    width: 70%;
    height: 40%;
    border-radius: 10px;
    text-align: center;
    font-size: 1.5625rem;
    font-family: Inter;
    font-weight: 800;
    border: none;
    margin-top:4%;
    color: white;
    @media (min-width: 1024px) {
        color: black;
        font-size: 1.2rem;
    }
`;  

function Button({name}) {
    return ( 
    <>
    <StyledContainer>
        <ContainerButton>{name}</ContainerButton>
    </StyledContainer>
    </> 
);
}

export default Button;