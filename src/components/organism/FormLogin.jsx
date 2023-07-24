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
import {useDispatch} from 'react-redux';

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
//   const dispatch = useDispatch()

//   const navigate = useNavigate();

//   const endPoint = "http://54.174.82.8/Mecasoft/getAll";

  const Form = useRef();
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  
  function isValidLogin(users,username, password) {
    let user = null;
    let flag = false;
    for (let i = 0; i < users.length && !flag; i++) {
      if (users[i].name_users === username && users[i].password === password) {
        user = users[i]
        flag = true;
      }
    }
    return user;
  }

  const handlerClick = () => {
    const newForm = new FormData(Form.current);
    fetch(endPoint, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let username = newForm.get("name_users")
        let password = newForm.get("password")
        let user = isValidLogin(data,username, password);
        console.log(JSON.stringify(user))
        if (user != null)  {          
          
          dispatch({
            type: "ADD_EVENT",
            value: user
          })
          if(newForm.get("name_users")==="wenson1980"){


            swal({
             
              text: `Bienvenido ${username}`,
              icon: 'success',
            })
            navigate("/HomeAdmin");
          }else{
            swal({
             
              text: `Bienvenido ${username}`,
              icon: 'success',
            })
            navigate("/HomeUser");
          }

        } else {

          Swal({
            title: 'Oops...',
            text: `Credenciales incorrectas. Inténtalo de nuevo.`,
            icon: 'error',
          });

        }
      });
  };

  return (
    <>
      <StyledContainer>
      
        <StyledContainerForm>
          <form ref={Form}>
            <Titulo msn={"AquaTech"} />
            <GroupInput
              type={"text"}
              placeholder={"Usuario"}
              nombre={"name_users"}
              
            />
            <GroupInput
              type={"text"}
              placeholder={"Correo"}
              nombre={"password"}
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
