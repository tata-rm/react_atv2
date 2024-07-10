import React, {useState} from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="App">
      <p id='p'>Contador</p>
      <p>{contador}</p>
      <button onClick={incrementar} id="but">Incrementar</button>        
    </div>
  );
}
export default Contador;