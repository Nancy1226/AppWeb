import styled from "styled-components";
const StyledImg = styled.img`
    width: 100%;
`;
function Icon({src}) {
    return (
         <>
            <StyledImg src={src} />
        </> 
    );
}

export default Icon;