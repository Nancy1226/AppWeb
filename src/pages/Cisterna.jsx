import BodyPageCisterna from "../components/organism/BodyPageCisterna";
import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

// const socket = socketIOClient("http://localhost:3000");

function Cisterna() {
    // const [message, setMessage] = useState(" ");
    // const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     socket.on('connection', (data) => {
    //       console.log("conectado")
    //     });
    // }, []);

    // socket.on('message', (message) => {
    //     console.log(message)
    //     setMessages([...messages, message]);
    //   }); 

    return (
    <>
        <BodyPageCisterna msn={"Nivel Agua Cisterna"} funcion={"funcion"} name={"Status: Encendido"} number={"25%"} />
    </> 
     );
}

export default Cisterna;