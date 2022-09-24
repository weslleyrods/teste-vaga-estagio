
import React, {useState} from "react";
import useFetch from "./useFetch";
const Form = (props)=>{

const [isPending, setIsPending] = useState(false);

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
    
    function handleChange(e){
        let value = e.target.value;
        setState({
        ...state,
        [e.target.name]: value},
        )      
}

const handleSubmit = (e) =>{
    // e.preventDefault();
    const empresa = {
        cnpj: state.cnpj,
        nome: state.nome,
        cep: state.cep,
        endereco: state.endereco,
        numeroEnd: state.numeroEnd,
        bairro: state.bairro,
        uf: state.uf,
        cidade: state.cidade
    }
    setIsPending(true);

    fetch('http://localhost:8000/empresas', {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(empresa)
    })
    .then(()=>{
        console.log('Empresa adicionada!');
        setIsPending(false);
    })
}

    const {data: estados} = useFetch('http://localhost:8000/estados')
    
    const buscaEstados = estados.map(estado => 
        <option value={estado.nome}>{estado.nome}</option>                  
        )
    
    const handleClick = ()=>{
        setState('')
        }

    return(
    
    <form onSubmit={handleSubmit}>
        <div className="row mx-2">
            <div className="row w-100">
                <div className='mb-3 col'>
                    <label className='form-label'>CNPJ:
                    </label>
                    <input required type="text" name='cnpj'className='form-control'
                    value={state.cnpj}
                    onChange={handleChange}/>
                </div>
                <div className='mb-3 col'>                
                    <label className='form-label'>Nome da Empresa:
                    </label>
                    <input required type="text" name='nome'className='form-control'
                    value={state.nome}
                    onChange={handleChange}/>
                </div>
            </div>
            
            <div className="row w-100">
                <div className='mb-3 col'>                
                    <label className='form-label'>CEP:
                    </label>
                    <input required type="text" name='cep'className='form-control'
                    value={state.cep}
                    onChange={handleChange}/>
                </div>
                <div className='mb- col'>                
                    <label className='form-label'>Endereço:
                    </label>
                    <input required type="text" name='endereco'className='form-control'
                    value={state.endereco}
                    onChange={handleChange}/>
                </div>
                <div className='mb-3 col'>                
                    <label className='form-label'>Número:
                    </label>
                    <input required type="text" name='numeroEnd'className='form-control'
                    value={state.numeroEnd}
                    onChange={handleChange}/>
                </div>
            </div>
            
            <div className="row w-100">
                <div className='mb-3 col'>                
                    <label className='form-label'>Bairro:
                    </label>
                    <input required type="text" name='bairro'className='form-control'
                    value={state.bairro}
                    onChange={handleChange}/>
                </div>
                <div className='mb-3 col'>                
                    <label className='form-label' for="estado">UF:</label>
                    <select id='teste'required name='uf'className='form-select'
                    value={state.uf}
                    onChange={handleChange}
                    >
                    {buscaEstados}
                    </select>
                </div>
                <div className='mb-3 col'>
                    <label className='form-label' for='cidade'>Cidade:</label>
                    <input required type="text" name='cidade' className='form-control'
                    value={state.cidade}
                    onChange={handleChange}
                    />
                </div>
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

export default Form