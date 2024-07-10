import React, {useState} from 'react';

function Tarefas() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([]);

    const addTarefa = (evento) => {
        setInput(evento.target.value);
    };

    const listar = () => {
        if (input !== '') {
            setTarefas([...tarefas, input]);
            setInput('');
        }
    };
    
    return (
        <div className="App">
            <p id='p'>Lista</p>
            <input type="text" value={input} onChange={addTarefa}/><br />
            <button onClick={listar} id="but">Adicionar</button>
            <ul id='ul'>
                {tarefas.map((item, index) => (
                    <li key={index}>{item}</li>

                ))}
            </ul>
        </div>
    );
}
export default Tarefas;