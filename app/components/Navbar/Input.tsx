'use client'

import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form"
import { TextField } from "@mui/material"

interface InputProps {
    id:string,
    label: string,
    type?: string
    disabled?:boolean,
    formatPrice?: boolean
    required?:boolean,
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors
}


const Input:React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    formatPrice,
    required,
    register,
    errors
}) => {

    return(
        <TextField 
            id={id} 
            label={label} 
            variant="outlined" 
            disabled={disabled}
            {...register(id, { required })}
            type={type}
            sx={{marginTop:'20px'}}/>
    )

}


export default Input