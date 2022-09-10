
import React from "react";
const Form = (props)=>{

// const [cnpj, setCnpj] = useState('');
// const [nome, setNome] = useState('');
// const [cep, setCep] = useState('');
// const [endereco, setEndereco] = useState('');
// const [numeroEnd, setNumeroEnd] = useState('');
// const [bairro, setBairro] = useState('');

const [state, setState] = React.useState({
    cnpj:'',
    nome:'',
    cep: '',
    endereco:'',
    numeroEnd:'',
    bairro:'',
})
    
    function handleChange(e){
        let value = e.target.value;
        setState({
        ...state,
        [e.target.name]: value},
        )      
}



    return(

    <form>
        <div className="row mx-2">
            <div className='mb-3'>
                <label className='form-label'>CNPJ:
                </label>
                <input type="text" name='cnpj'className='form-control'
                value={state.cnpj}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Nome da Empresa:
                </label>
                <input type="text" name='nome'className='form-control'
                value={state.nome}
                onChange={handleChange}/>
            </div>
            
            <div className='mb-3'>                
                <label className='form-label'>CEP:
                </label>
                <input type="text" name='cep'className='form-control'
                value={state.cep}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Endereço:
                </label>
                <input type="text" name='endereco'className='form-control'
                value={state.endereco}
                onChange={{handleChange}}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Número:
                </label>
                <input type="text" name='numeroEnd'className='form-control'
                value={state.numeroEnd}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Bairro:
                </label>
                <input type="text" name='bairro'className='form-control'
                value={state.bairro}
                onChange={handleChange}/>
    </div>
            {/*UF*/}
            {/*Cidade*/}         
            <div className='d-flex justify-content-around'>
            <button type='submit' className='btn btn-danger'>Cancelar</button>
            <button type='submit' className='btn btn-primary'>Salvar</button>
            </div>
        </div>
        <p>{state.cnpj}</p>
        <p>{state.nome}</p>
        <p>{state.cep}</p>
        <p>{state.endereco}</p>
        <p>{state.numeroEnd}</p>
        <p>{state.bairro}</p>
    </form>
    )
} 

export default Form