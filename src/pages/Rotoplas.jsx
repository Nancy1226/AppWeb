import BodyPageRotoplas from "../components/organism/BodyPageRotoplas";
import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient("http://localhost:3000");

function Rotoplas() {
    const [message, setMessage] = useState(" ");
    const [messages, setMessages] = useState([]);
    const [statusR, setStatusR] = useState([]);

    useEffect(() => {
        socket.on('connection', (data) => {
          console.log("conectado")
        });
    
        
    }, []);    
    
    socket.on('message', (message) => {
        console.log(message)
        setMessages([...messages, message]);
      });

    socket.on('statuR', (statuR) =>{
      console.log(statuR)
      setStatusR([...statusR, statuR]);
    });

    return ( 
    <>
        <BodyPageRotoplas msn={"Nivel Agua Rotoplas"} funcion={"funcion"} name={statusR.map((statuR, i)=> (<li key={i}>Estado: {statuR}</li>) ) } number={
            messages.map((message, i) => ( <li key={i}>{message}</li> ))} />
    </> 
    );
}

export default Rotoplas;