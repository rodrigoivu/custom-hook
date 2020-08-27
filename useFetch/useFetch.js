import { useState, useEffect, useRef } from "react";

export const useFetch = ( url ) => {

    //Usamos useRef, para el problema de volver a presionar el boton show antes que termine de hacer la consult fetch
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    // se usa este useEffect para tener una referencia cuando el componente se descarga
    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        
        setState({ data:null, loading: true, error: null }); //al cambiar url aparece loading

        fetch( url )
            .then( resp => resp.json() )
            .then( data =>{
                if ( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: "No se pudo cargar la info"
                })
            })
    }, [url])

    return state;
}
