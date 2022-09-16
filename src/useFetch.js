import { useState, useEffect } from "react";

const useFetch = (url)=>{

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Não foi possível carregados os dados, tente novamente mais tarde.')
            }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            setError([]); 
        })
        .catch((err)=>{
            setIsPending(false); 
            setError(err.message);
        })
    },[url]);

    return{data, isPending, error};
}

export default useFetch; 