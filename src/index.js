import React from 'react';
import ReactDOM from 'react-dom';
import Cartao from './Cartao.js';
import Form from './Form.js';
import Lista from './Lista';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{

    return(

    <div className='container mt-2'>
        <Cartao cabecalho='Formulário de Cadastro'>          
        </Cartao>
        <Form/>
        <Lista/>
    </div>
    )

}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')

)