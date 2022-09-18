import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useState }  from 'react';


const Edit = () =>{
    const { id } = useParams()
    const {data: empresas, isPending, error} = useFetch(`http://localhost:8000/empresas/${id}`)
    const {data: estados} = useFetch('http://localhost:8000/estados')
    

    console.log(empresas);
    const handleSubmit =()=>{}
    const handleChange =()=>{}
    const handleClick = ()=>{}
    
    const buscaEstados = estados.map(estado => 
        <option value={estado.nome}>{estado.nome}</option>                  
        )

    
    return(
        <form onSubmit={handleSubmit}>
        <div className="row mx-2">
            <div className='mb-3'>
                <label className='form-label'>CNPJ:
                </label>
                <input required type="text" name='cnpj'className='form-control'
                value={empresas.cnpj}
                onChange={handleChange}
                />
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Nome da Empresa:
                </label>
                <input required type="text" name='nome'className='form-control'
                value={empresas.nome}
                onChange={handleChange}/>
            </div>
            
            <div className='mb-3'>                
                <label className='form-label'>CEP:
                </label>
                <input required type="text" name='cep'className='form-control'
                value={empresas.cep}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Endereço:
                </label>
                <input required type="text" name='endereco'className='form-control'
                value={empresas.endereco}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Número:
                </label>
                <input required type="text" name='numeroEnd'className='form-control'
                value={empresas.numeroEnd}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Bairro:
                </label>
                <input required type="text" name='bairro'className='form-control'
                value={empresas.bairro}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label' for="estado">UF:</label>
                <select id='teste'required name='uf'className='form-select'
                value={empresas.uf}
                onChange={handleChange}
                >
                {buscaEstados}

                </select>
            </div>

            <div className="mb-3">
                <label className='form-label' for='cidade'>Cidade:</label>
                <input required type="text" name='cidade' className='form-control'
                value={empresas.cidade}
                onChange={handleChange}
                />
            </div>
            <div className='d-flex justify-content-around'>
            <button type='reset' onClick={handleClick} className='btn btn-danger'>Cancelar</button>
            {!isPending &&  <button type='submit' className='btn btn-primary'>Salvar</button>}
            {isPending &&  <button type='submit' className='btn btn-primary'>Salvando...</button>}
            </div>
        </div>
        </form>
        
    )
}

export default Edit