import React, {useState} from 'react';

function Nome() {
    const [contador, setContador] = useState(0);

    const nome = 'nome'

    const trocarNome = () => {
        setContador(contador + 1);
        if (contador % 2 === 0) {
            nome = 'terra';
        } else {
            nome = 'ar';
        }
    };

    return (
        <div className="App">
            <p> {nome} </p>
            <button onClick={trocarNome}> Trocar nome </button>      
        </div>
    );
}
export default Nome;