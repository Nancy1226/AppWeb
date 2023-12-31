import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { images } from "../../images/images";
import '../styles/FormLogin.css';
import Button1 from "../atoms/Button1";
import GroupInput from "../molecules/GroupInput";
import styled from "styled-components";
import Titulo from "../atoms/Titulo";
import Icon from "../atoms/Icon";
import Swal from 'sweetalert';
import axios from "axios";

const StyledContainer = styled.div` //movil
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  width: 100vw;
  height: 85vh;

  @media (min-width: 1024px) { //para compu
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

`;

const StyledContainerForm = styled.div`
  padding: 0;
  width:100%;
  height: auto;
  @media (min-width: 1024px) {
    padding: 80px 30px;
    width: 500px;
    height: auto;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.25);
  }
  
`;

const StyledContainerIlustracion = styled.div` //movil
  display: flex;
  width: 100%;
  height: auto;
  padding-top: 20px;
  display:none;
  /* border: 2px solid yellow; */
 
  @media (min-width: 1024px) { //para pc
  display: flex;
  width: 40%;
  height: auto;
  padding: 80px 20px;
  margin-left: 2%;
  /* border:1px solid green; */
  }
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`; 

const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    width:80%;
  
`;
const StyledWrapperButton = styled.div`
  display: flex;
   align-items:center;
    justify-content: center;
    width:100%;

`;
function FormLogin() {

  const form = useRef();
  const navigate = useNavigate();

  const handlerClick = async() => {

    const newForm = new FormData(form.current);
    let objectFront={
       email : newForm.get("email"),
       password : newForm.get("password")
    }
    console.log(objectFront)
    let response = await axios.post("http://44.207.54.43:4000/api/user/login",objectFront)
    console.log(response.status)
    if(response.status === 200 ){
      navigate("/Rotoplas");
    }
    if(response.status != 200){
        alert("Error")
  }
};

  return (
    <>
      <StyledContainer>
      
        <StyledContainerForm>
        <form ref={form}>
            <Titulo msn={"AquaTech"} />
            <GroupInput
              type={"text"}
              placeholder={"Correo"}
              nombre={"email"}
            />

            <GroupInput
              type={"password"}
              placeholder={"Contraseña"}
              nombre={"password"}
            />

                <StyledLink>
                <Link to={"/Register"} className="estilo-link">¿Aun no tienes una cuenta?</Link>
                </StyledLink>

            <StyledWrapperButton>
            <StyledButton>
            <Button1
              name={"Iniciar sesion"}
              estilo={false}
              funcion={handlerClick}
            />
            </StyledButton>
            </StyledWrapperButton>
            
          </form>
        </StyledContainerForm>

        <StyledContainerIlustracion>
          <Icon src={images.foto} />
        </StyledContainerIlustracion>
      </StyledContainer>
    </>
  );
}

export default FormLogin;
