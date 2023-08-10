'use client'

import axios from 'axios'
import { useState } from 'react'
import {FieldValues, SubmitHandler, useForm, UseFormRegister} from 'react-hook-form'
import { Box, Modal, TextField, Typography, Button } from '@mui/material'
import Input from './Input'
import { toast, Toaster } from 'react-hot-toast'
import {FcGoogle} from 'react-icons/fc'
import { signIn } from 'next-auth/react'



interface RegisterModalProps {
    open:boolean
    setOpen: (arg: boolean) => void
    handleCloseMenu: (arg:boolean) => void
    setHasLoggedIn:(arg:boolean)=>void
    hasLoggedIn:boolean
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs:'90%',
      md:'50%',
      lg:'40%'
    },
    height:{
      xs:'90%',
      md:'50%',
      lg:'60%'
    },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:'column'
  };

  


const RegisterModal:React.FC<RegisterModalProps> = ({open,setOpen, handleCloseMenu, setHasLoggedIn, hasLoggedIn}) => {

    const [isLoading, setIsLoading] = useState(false)

    


    const {
        register, 
        handleSubmit, 
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: '',
        }
        })


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data)
        .then(()=>{
            setOpen(false)
            toast.success('Bienvenido/a!')
            setHasLoggedIn(true)
        })
        .catch((error)=> {
            toast.error('Algo salio mal')
        })
        .finally(()=> {
            setIsLoading(false)
            handleCloseMenu(false)
        })
    }

    function handleClose(){
        setOpen(false)
    }

   const signInRegisterWithGoogle = async() => {

        await signIn('google')
        .then(()=> {

            
            toast.success('Cuenta creada!')

           
        })
        .finally(()=>{
            setHasLoggedIn(true)
        })
      

    }

   


    return(
        <div>
            
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                
            <Box sx={style} component={'form'} onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{textAlign:'center'}}>
                    <Typography>Registrate</Typography>
                </Box>
                <Input 
                    id='email'
                    label='Correo electronico'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id='name'
                    label='Nombre'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input 
                    id='password'
                    label='Contraseña'
                    type='password'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Box sx={{marginTop:'20px', backgroundColor:'#000'}} component={'button'} onClick={onSubmit}>
                    <Typography sx={{color:'#fff', fontWeight:'bold'}}>Crear cuenta</Typography>
                </Box>
                <Box sx={{marginTop:'20px', backgroundColor:'#fff', display:'flex', flexDirection:'row', justifyContent:'center'}} component={'button'} onClick={()=>signInRegisterWithGoogle()}>
                    <FcGoogle style={{marginRight:'10px'}} size={24}/>
                    <Typography sx={{color:'#000', fontWeight:'bold'}}>Continuar con Google</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', marginTop:'15px'}}>
                    <Typography>Ya tienes una cuenta?</Typography>
                    <Box component={'button'} sx={{marginLeft:'15px', border:'none', backgroundColor:'transparent'}} onClick={handleClose}>
                        <Typography sx={{color:'blue'}}>Ingresar</Typography>
                    </Box>
                </Box>
            </Box>
            </Modal>
        </div>
        
    )

}


export default RegisterModal