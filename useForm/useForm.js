import { useState } from "react"

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () =>{
        setValues(initialState) //resetear formulario
    }

    const handleInputchange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values,handleInputchange, reset]

}
