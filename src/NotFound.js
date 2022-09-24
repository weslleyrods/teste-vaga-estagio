import {Link} from 'react-router-dom';

const NotFound = () =>{
    return(
        <div>

        <h1>Página não encontrada.</h1>
        <p>Por favor, tente mais tarde.</p>
        <p><Link to={'/'}>Clique aqui</Link> para retornar a página inicial.</p>
        </div>
    )

}

export default NotFound