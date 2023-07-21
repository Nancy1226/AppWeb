import styled from "styled-components";
import GroupOption from "../molecules/GroupOption";
import Button from "../atoms/Button";
import GroupNav from "../molecules/GroupNav";

const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    /* flex-shrink: 0; */
    width: 380px;
    height: 180px;
    border-radius: 15% 15% 0% 0%;
    background: #006ECE;
`;
const StyledWrapperButton = styled.div`
  display: flex;
   align-items:center;
    justify-content: center;
    width:100%;

`;

function BodyPage() {
    return ( 
    <>
        <GroupNav /> 
        <GroupOption />
        
            <StyledWrapperButton>
                <StyledButton>
                        <Button funcion={"funcion"} name={"Encender"} />
                </StyledButton>
            </StyledWrapperButton>
    </>
     );
}

export default BodyPage;