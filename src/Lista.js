import {useState, useEffect} from 'react';


const Lista = (props)=>{
    const [empresas, setEmpresas] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/empresas')
        .then(res=>{
            if(!res.ok){
                throw Error('Não foi possível carregados os dados, tente novamente mais tarde.')
            }

            return res.json();
        })
        .then(data=>{
            setEmpresas(data);
            setIsPending(false);
            setError([]); 
        })
        .catch((err)=>{
            setIsPending(false); 
            setError(err.message);
        })
    },[]);

    return(
        <div>           
                <table className="table">
                    <thead>
                        <tr>
                            <th>CNPJ</th>
                            <th>Nome da Empresa</th>
                            <th>Editar</th>                    
                        </tr>
                    {error && <div>{error}</div>}
                    {isPending && <div>Carregando...</div>}
                    </thead>
                    {empresas.map((empresa)=>(
                    <tbody >
                        <tr key={empresa.id}>
                            <td>{empresa.cnpj}</td>
                            <td>{empresa.nome}</td>
                            <td><a href=''>Edit</a></td>
                        </tr>
                    </tbody>
                    ))}
                </table>
        </div>
    )
}

export default Lista;