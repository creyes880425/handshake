import { useEffect, useState } from 'react';
import io from 'socket.io-client';

function App() {

  const [socket] = useState(io("/"));

  useEffect(() => {
    console.log('Está corriendo?');
    socket.on('bienvenida', data => console.log(data));
  }, []);

  return (
    <>
      <h1>Pruebas Socket</h1>
    </>
  );
}

export default App;
