import styled from 'styled-components';
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

const StyledContainerInputs = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 7%;
    font-family: 'Fenix';
    font-style: normal;
    font-weight: 400;
    line-height: 2%;
    text-align: justify;

    @media (min-width: 1024px){
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 5%;
    font-family: 'Fenix';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2%;
    text-align: justify;
    }
`;
const StyledInput= styled.input`

    background: #EEF1F0;
    width:75%;
    height: 50px;
    padding: 0 10%;
    border-radius: 8px;
    border: none;
    outline: none;

    @media (min-width: 1024px){
        width:${props => props.tamanio ?  '72%' : '55%'};
    }

`;
const StyledImg = styled.img`
    position: absolute;
    top: 9%;
    left: 13%;
    width: 10%;
    height: 70%;
    @media (min-width: 1024px){
        left: ${props => props.tamanioI ?  '10%' : '14%'};
    }
`;

function GroupInput({tamanio, type, placeholder, nombre }) {

    return ( 
        
    <StyledContainerInputs>

    <StyledInput tamanio={tamanio} type={type} placeholder={placeholder} name={nombre}/>

    </StyledContainerInputs>

    );
}

export default GroupInput;