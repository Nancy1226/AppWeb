import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Img from "../atoms/Img";
import Button1 from "../atoms/Button1";
import GroupInput from "../molecules/GroupInput";
import { images } from "../../images/images";
import Titulo from "../atoms/Titulo";
import Icon from "../atoms/Icon";
import Swal from 'sweetalert';

const StyledContainer = styled.div`
  //movil
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media (min-width: 1024px) {
    //para compu
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 90vh;
  }
`;

const StyledContainerForm = styled.div`
  //movil
  padding: 0;
  width: 100%;
  height: 90%;

  @media (min-width: 1024px) {
    //compu
    /* border: 4px solid red; */
    /* padding: 80px 30px; */
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    margin-bottom: 5%;
    width: 600px;
    height: auto;
    box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.25);
  }
`;

const StyledContainerB = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 4%;
`;

const StyledContainerBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72%;
`;

const StyledContainerIlustracion = styled.div` //movil
    display:flex;
    width: 100%;
    height: auto;
    padding-top: 20px;
    display: none;

  @media (min-width: 1024px) { //compu
  display: flex;
  width: 40%;
  height: auto;
  padding-left: 80px;
  margin-left: 2%;
  }
  `

function FormRegister() {
  // const endpoint = "http://54.174.82.8/Mecasoft/create";
  
  const form = useRef();
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    const newForm = new FormData(form.current);

    if (
      newForm.get("name") === null ||
      newForm.get("name_users") === null ||
      newForm.get("email") === null ||
      newForm.get("matricula") === null ||
      newForm.get("password") === null ||
      newForm.get("confirmpassword") === null
    ) {
      
      alert("campos vacios");
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      // var raw = JSON.stringify({
      //   name: "Pozo",
      //   name_users: "Alan",
      //   email: "alan@gmail.com",
      //   matricula: "221230",
      //   password: "alan22",
      //   confirmpassword: "alan22",
      // });

      var raw = JSON.stringify({

        name: newForm.get("name"),
        name_users: newForm.get("name_users"),
        email: newForm.get("email"),
        matricula: newForm.get("matricula"),
        password: newForm.get("password"),
        confirmpassword: newForm.get("confirmpassword"),


      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw ,
        redirect: "follow",
      };

      fetch("http://54.174.82.8/Mecasoft/create", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
      
     //Codigo borrado

     Swal({
      title: '¡Felicidades! ' ,
      text: 'Registro exitoso.',
      icon: 'success',
    });

    navigate("/HomeAdmin");
    }
  };

  return (
    <>
      <Img src={images.regresarIcon} name={"/HomeAdmin"} />
      <StyledContainer>
        <StyledContainerForm>
          <form ref={form}>
            <Titulo msn={"Registrar usuario"} />
            <GroupInput
              type={"text"}
              placeholder={"Nombre de usuario"}
              nombre={"name"}
            />

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
            <GroupInput
              type={"password"}
              placeholder={"Confirmar contraseña"}
              nombre={"confirmpassword"}
            />

            <StyledContainerB>
              <StyledContainerBtn>
                <Button1
                  funcion={clickHandler}
                  name={"Registrar"}
                  estilo={true}
                />
              </StyledContainerBtn>
            </StyledContainerB>
          </form>
        </StyledContainerForm>

        <StyledContainerIlustracion>
          {/* <Icon src={images.foto2} />
           <Icon src={images.foto3} /> */}
            <Icon src={images.foto} />
        </StyledContainerIlustracion> 
      </StyledContainer>
    </>
  );
}

export default FormRegister;