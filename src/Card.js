
const Card = (props)=>{

    return(
        <div className="card">
            <div className="card-header border">
                {props.cabecalho}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Card