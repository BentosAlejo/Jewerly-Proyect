'use client'

import axios from 'axios'
import { useState } from 'react'
import {signIn} from 'next-auth/react'
import {FieldValues, SubmitHandler, useForm, UseFormRegister} from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Box, Modal, TextField, Typography, Button } from '@mui/material'
import Input from './Input'
import { toast } from 'react-hot-toast'
import {FcGoogle} from 'react-icons/fc'



interface RegisterModalProps {
    open:boolean
    setOpen: (arg: boolean) => void
    handleCloseMenu:(arg:boolean) => void
    hasLoggedIn: boolean
    setHasLoggedIn:(arg:boolean)=>void
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

  


const LoginModal:React.FC<RegisterModalProps> = ({open,setOpen, handleCloseMenu, hasLoggedIn, setHasLoggedIn}) => {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    


    const {
        register, 
        handleSubmit, 
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            email: '',
            password: '',
        }
        })


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

      signIn('credentials', {
        ...data,
        redirect:false
      })
      .then((callback)=>{
        setIsLoading(false)
        setHasLoggedIn(true)
        setOpen(false)
        
        if(callback?.ok){
          toast.success('Bienvenido/a denuevo!')
          router.refresh()
          setOpen(false)
        }
        
        if(callback?.error){
          toast.error(callback.error)
        }

      })
    }



    function handleClose(){
        setOpen(false)
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
                    <Typography>Ingresar</Typography>
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
                    id='password'
                    label='Contraseña'
                    type='password'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Box sx={{marginTop:'20px', backgroundColor:'#000'}} component={'button'} onClick={onSubmit}>
                    <Typography sx={{color:'#fff', fontWeight:'bold'}}>Ingresar</Typography>
                </Box>
                <Box sx={{marginTop:'20px', backgroundColor:'#fff', display:'flex', flexDirection:'row', justifyContent:'center'}} component={'button'} onClick={()=>signIn('google')}>
                    <FcGoogle style={{marginRight:'10px'}} size={24}/>
                    <Typography sx={{color:'#000', fontWeight:'bold'}}>Continuar con Google</Typography>
                </Box>
            </Box>
            </Modal>
        </div>
        
    )

}


export default LoginModal