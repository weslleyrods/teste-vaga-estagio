import {useState, useEffect} from 'react';


const Lista = (props)=>{
    const [empresas, setEmpresas] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/empresas')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setEmpresas(data);
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