
const Cartao = (props)=>{

    return(
        <div className="card border">
            <div className="card-header border">
                {props.cabecalho}
            <div>
                {props.children}
            </div>
            </div>
        </div>
    )
}

export default Cartao