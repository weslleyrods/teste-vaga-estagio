import React from 'react';
import ReactDOM from 'react-dom';

import Cartao from '../Cartao.js';
import Form from '../Form.js';
import Lista from '../Lista';


const Home = ()=>{

    return(

        <div className='container mt-2'>       
            <Cartao cabecalho='Formulário de Cadastro'>          
            </Cartao>
            <Form/>
            <Lista/>      
        </div>
    )

}

export default Home