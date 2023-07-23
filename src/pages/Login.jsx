import { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient("http://localhost:3000");
function Login() {
    useEffect(() => {
        socket.on('connection', (data) => {
          console.log("conectado")
        });

        
    }, []);    
    socket.on('message', (data) => {
        console.log(data)
      });

    return ( 
    <>
        <h1>Holaaaaaaa</h1>
    </>
     );
}

export default Login;