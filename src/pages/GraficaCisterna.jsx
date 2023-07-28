import styled from "styled-components";
import GroupNav from "../components/molecules/GroupNav";
import GroupOption from "../components/molecules/GroupOption";
import TableCisterna from "../components/organism/TableCisterna";

const StyledContainer = styled.div`
    margin-top: 6%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: 2px solid rebeccapurple; */
    width: 100%;
    height: 100%;
`;

const StyledH2 = styled.h2`
  @media (min-width: 1024px) {
      color: #595656;
      font-family:Arial;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
`;

function GraficaCisterna() {

    return ( 
    <>
        <GroupNav /> 
        <GroupOption />
        
        <StyledContainer>
            <StyledH2>Nivel de agua Cisterna</StyledH2>
            <TableCisterna />            
        </StyledContainer>                
    </>
     );
}

export default GraficaCisterna;