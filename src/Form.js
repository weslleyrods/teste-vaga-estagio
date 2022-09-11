
import React, {useState} from "react";
const Form = (props)=>{

// const [cnpj, setCnpj] = useState('');
// const [nome, setNome] = useState('');
// const [cep, setCep] = useState('');
// const [endereco, setEndereco] = useState('');
// const [numeroEnd, setNumeroEnd] = useState('');
// const [bairro, setBairro] = useState('');

const [isPending, setIsPending] = useState(false);

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

const handleSubmit = (e) =>{
    // e.preventDefault();
    const empresa = {
        cnpj: state.cnpj,
        nome: state.nome,
        cep: state.cep,
        endereco: state.endereco,
        numeroEnd: state.numeroEnd,
        bairro: state.bairro
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



    return(

    <form onSubmit={handleSubmit}>
        <div className="row mx-2">
            <div className='mb-3'>
                <label className='form-label'>CNPJ:
                </label>
                <input required type="text" name='cnpj'className='form-control'
                value={state.cnpj}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Nome da Empresa:
                </label>
                <input required type="text" name='nome'className='form-control'
                value={state.nome}
                onChange={handleChange}/>
            </div>
            
            <div className='mb-3'>                
                <label className='form-label'>CEP:
                </label>
                <input required type="text" name='cep'className='form-control'
                value={state.cep}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Endereço:
                </label>
                <input required type="text" name='endereco'className='form-control'
                value={state.endereco}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Número:
                </label>
                <input required type="text" name='numeroEnd'className='form-control'
                value={state.numeroEnd}
                onChange={handleChange}/>
            </div>
            <div className='mb-3'>                
                <label className='form-label'>Bairro:
                </label>
                <input required type="text" name='bairro'className='form-control'
                value={state.bairro}
                onChange={handleChange}/>
    </div>
            {/*UF*/}
            {/*Cidade*/}         
            <div className='d-flex justify-content-around'>
            <button type='submit' className='btn btn-danger'>Cancelar</button>
            {!isPending &&  <button type='submit' className='btn btn-primary'>Salvar</button>}
            {isPending &&  <button type='submit' className='btn btn-primary'>Salvando...</button>}

            </div>
        </div>
        {/* <p>{state.cnpj}</p>
        <p>{state.nome}</p>
        <p>{state.cep}</p>
        <p>{state.endereco}</p>
        <p>{state.numeroEnd}</p>
        <p>{state.bairro}</p>/ */}
    </form>
    )
} 

export default Form