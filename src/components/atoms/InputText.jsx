import styled ,{css} from 'styled-components';

const StyledInputText = styled.input`
width: 100px;
height: 26px;
border-color:#F19DA9 ;
border-radius:10px;
`;
function InputText({msn}) {
    return ( 
        <StyledInputText placeholder={msn}></StyledInputText>
     );
}

export default InputText;