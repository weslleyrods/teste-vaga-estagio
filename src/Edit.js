import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState }  from 'react';
import useFetch from './useFetch';

const Edit = () =>{
    const { id } = useParams()
    
    let {data: empresas, isPending, error} = useFetch(`http://localhost:8000/empresas/${id}`)

    const {data: estados} = useFetch('http://localhost:8000/estados')
    
    const [state, setState] = React.useState({
        cnpj:'',
        nome:'',
        cep: '',
        endereco:'',
        numeroEnd:'',
        bairro:'',
        uf: '',
        cidade: '',      
    })

    //console.log(empresas);
    const handleSubmit = (e)=>{
        const empresa = {
            nome: empresas.nome,
            cnpj: empresas.cnpj,
            cep: empresas.cep,
            endereco: empresas.endereco,
            numeroEnd: empresas.numeroEnd,
            bairro: empresas.bairro,
            uf: empresas.uf,
            cidade: empresas.cidade
        }

        //setIsPending(true)
        console.log(empresa);
    
        fetch(`http://localhost:8000/empresas/${id}`, {
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(empresa)
        })
        .then(()=>{
            console.log('Empresa atualizada!');
            //setIsPending(false);
        })
    }

    const handleChange =(e)=>{
        let value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value},
        )
        empresas[e.target.name] = value
    }

    const handleClick = ()=>{}

    const buscaEstados = estados.map(estado => 
        <option value={estado.nome}>{estado.nome}</option>                  
        )
    
    return(
        <form onSubmit={handleSubmit}>
            {console.log('Renderizou')}
        <div className="row mx-2">
            <div className='row w-100'>
                <div className='mb-3 col'>
                    <label className='form-label'>CNPJ:
                    </label>
                    <input required type="text" name='cnpj'className='form-control'
                    value={empresas.cnpj}
                    onChange={handleChange}
                    />
                </div>
                <div className='mb-3 col'>                
                    <label className='form-label'>Nome da Empresa:
                    </label>
                    <input required type="text" name='nome'className='form-control'
                    value={empresas.nome}
                    onChange={handleChange}/>
                </div>
            </div>
            
            <div className='row w-100'>
                <div className='mb-3 col'>                
                    <label className='form-label'>CEP:
                    </label>
                    <input required type="text" name='cep'className='form-control'
                    value={empresas.cep}
                    onChange={handleChange}/>
                </div>
                <div className='mb-3 col'>                
                    <label className='form-label'>Endereço:
                    </label>
                    <input required type="text" name='endereco'className='form-control'
                    value={empresas.endereco}
                    onChange={handleChange}/>
                </div>
                <div className='mb-3 col'>                
                    <label className='form-label'>Número:
                    </label>
                    <input required type="text" name='numeroEnd'className='form-control'
                    value={empresas.numeroEnd}
                    onChange={handleChange}/>
                </div>
            </div>

            <div className='row w-100'>
                <div className='mb-3 col'>                
                    <label className='form-label'>Bairro:
                    </label>
                    <input required type="text" name='bairro'className='form-control'
                    value={empresas.bairro}
                    onChange={handleChange}/>
                </div>
                <div className='mb-3 col'>                
                    <label className='form-label' for="estado">UF:</label>
                    <select required name='uf'className='form-select'
                    value={empresas.uf}
                    onChange={handleChange}
                    >
                    {buscaEstados}

                    </select>
                </div>

                <div className="mb-3 col">
                    <label className='form-label' for='cidade'>Cidade:</label>
                    <input required type="text" name='cidade' className='form-control'
                    value={empresas.cidade}
                    onChange={handleChange}
                    />
                </div>
            </div>

            <div className='d-flex justify-content-around'>
            <button type='reset' onClick={handleClick} className='btn btn-danger'>Cancelar</button>
            { !isPending && <button type='submit' className='btn btn-primary'>
                Salvar
                </button>}
            {/* {<button type='submit' className='btn btn-primary'>Salvando...</button>} */}
            </div>
        </div>
        </form>
    )
}

export default Edit