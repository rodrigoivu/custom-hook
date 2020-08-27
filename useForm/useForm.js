import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => { //target viene de e: event desestructurado

        setValues({
            ...values,
            [ target.name ]: target.value
        })
    }

    return [ values, handleInputChange, reset ];

}
