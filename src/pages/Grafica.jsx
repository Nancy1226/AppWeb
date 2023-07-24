import styled from "styled-components";
import BodyPage from "../components/organism/BodyPageRotoplas";
import GroupNav from "../components/molecules/GroupNav";
import GroupOption from "../components/molecules/GroupOption";

const SyledContainer = styled.div`
    display: none;
  @media (min-width: 1024px) {
    display: flex;
    /* border: 2px solid wheat; */
    padding-left: 18%;
    margin-top: 7%;
    /* justify-content: space-around; */
    align-items: center;
  }
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

function Grafica() {
    return ( 
    <>
     <GroupNav /> 
        <GroupOption />
        <SyledContainer>
            <StyledH2>Consumo de energia</StyledH2>
        </SyledContainer>

    </>
     );
}

export default Grafica;