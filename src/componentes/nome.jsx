import React, {useState} from 'react';

function Nome() {
    const [nome, setNome] = useState(true);

    const trocarNome = () => {
        setNome(!nome);
    };

    return (
        <div className="App">
            <p id='p'>Nome</p>
            {nome ? <p>Terra</p> : <p>Ar</p>}
            <button onClick={trocarNome} id="but"> Trocar nome </button>
        </div>
    );
}
export default Nome;