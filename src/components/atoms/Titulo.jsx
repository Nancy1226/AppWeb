import styled from "styled-components";

const StyledTitulo = styled.div`
    color: #006ECE;
    font-weight: 700;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 8%;
`;

function Titulo({msn}) {
    return ( 
        <StyledTitulo>
        <h1>{msn}</h1>
        </StyledTitulo>
     );
}

export default Titulo;