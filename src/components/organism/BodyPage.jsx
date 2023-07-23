import styled from "styled-components";
import GroupOption from "../molecules/GroupOption";
import Button from "../atoms/Button";
import GroupNav from "../molecules/GroupNav";
import CirculoChart from "../molecules/CirculoChart";

const SyledContainer = styled.div`
    display: none;
  @media (min-width: 1024px) {
    display: flex;
    /* border: 2px solid wheat; */
    justify-content: center;
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

const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 11.1875rem;
    /* border-radius: 15% 15% 0% 0%; */
    background: #006ECE;
    border-radius: 3.125rem 3.125rem 0rem 0rem;
    border: 2px solid #006ECE;
    @media (min-width: 1024px) {
    border-radius: 1.6875rem 1.5625rem 1.0625rem 1.875rem;
    background: white;
    width: 15rem;
    height: 7rem;
  }
    `;


function BodyPage({msn, name}) {
    return ( 
    <>
        <GroupNav />  
        <GroupOption />
        <SyledContainer>
            <StyledH2>{msn}</StyledH2>
        </SyledContainer>

          <div className="cirulos-chart">
            <div>
              <CirculoChart/>
            </div>
         <StyledButton>
               <Button name={name} />
        </StyledButton>
          </div>

    </>
     );
}

export default BodyPage;