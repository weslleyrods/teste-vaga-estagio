import {useState} from 'react';


const Lista = (props)=>{
    const [empresas, setEmpresas] = useState([
        {cnpj: '1', nome:'Empresa 01', cep:'132465', endereco:'Rua A', numeroEnd:'47', bairro:'Bairro A', id: 1 },
        {cnpj: '2', nome:'Empresa 02', cep:'654984', endereco:'Rua B', numeroEnd:'48', bairro:'Bairro B', id: 2},
        {cnpj: '3', nome:'Empresa 03', cep:'458256', endereco:'Rua C', numeroEnd:'47', bairro:'Bairro C', id: 3}
    ]);

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