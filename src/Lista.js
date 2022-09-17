import {useState, useEffect} from 'react';
import useFetch from './useFetch';
import {Link} from 'react-router-dom';


const Lista = (props)=>{
    // const [empresas, setEmpresas] = useState([]);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState([]);

    const {data: empresas, isPending, error} = useFetch('http://localhost:8000/empresas')
    // useEffect(()=>{
    //     fetch('http://localhost:8000/empresas')
    //     .then(res=>{
    //         if(!res.ok){
    //             throw Error('Não foi possível carregados os dados, tente novamente mais tarde.')
    //         }

    //         return res.json();
    //     })
    //     .then(data=>{
    //         setEmpresas(data);
    //         setIsPending(false);
    //         setError([]); 
    //     })
    //     .catch((err)=>{
    //         setIsPending(false); 
    //         setError(err.message);
    //     })
    // },[]);

    return(
        <div>           
                <table className="table">
                    <thead>
                        <tr>
                            <th>CNPJ</th>
                            <th>Nome da Empresa</th>
                            <th>Editar</th>                    
                        </tr>
                    {<div>{error}</div>}
                    {isPending && <div>Carregando...</div>}
                    </thead>
                    {empresas.map((empresas)=>(
                    <tbody >
                        <tr key={empresas.id}>
                            <td>{empresas.cnpj}</td>
                            <td>{empresas.nome}</td>
                            <td>
                                <Link to={`/edit/${empresas.id}`}>Edit</Link>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
        </div>
    )
}

export default Lista;