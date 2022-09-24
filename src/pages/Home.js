import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card.js';
import Form from '../Form.js';
import Lista from '../Lista';


const Home = ()=>{

    return(

        <div className='container mt-2'>       
            <Card cabecalho='Formulário de Cadastro'>          
            <Form/>
            </Card>
            <Lista/>      
        </div>
    )

}

export default Home