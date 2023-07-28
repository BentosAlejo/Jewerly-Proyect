
import { Box, Typography, IconButton } from '@mui/material'
import Image from 'next/image'
import { PiSpotifyLogo } from 'react-icons/pi'
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { SlArrowUp } from 'react-icons/sl'



const FooterSm = () => {

    return(

     <Box sx={{width:'75%', justifyContent:'center'}}>

       

            <Box sx={{display:'flex', flexDirection:{sm:'column',md:'row'}, alignItems:'center', marginBottom:'40px', justifyContent:'space-between'}}>
                <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center', marginRight:{md:'50px'}}}>
                    <Box sx={{display:{sm:'none', md:'flex'}}}>
                        <Image
                            src={"/images/images.png"}
                            alt="Logo"
                            width={80}
                            height={70}
                        />
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row', marginLeft:'20px'}}>
                        <Typography sx={{color:'#fff', marginLeft:'10px'}}>Home</Typography>
                        <Typography sx={{color:'#fff', marginLeft:'10px'}}>Joyas</Typography>
                        <Typography sx={{color:'#fff', marginLeft:'10px'}}>Menciones</Typography>
                        <Typography sx={{color:'#fff', marginLeft:'10px'}}>Contacto</Typography>
                    </Box>

                </Box>
                <Box sx={{display:'flex', flexDirection:'row', margin:'40px 0 40px 0'}}>
                    <Box>
                        <Typography sx={{color:'#fff', marginBottom:'15px'}}>Opciones de pago</Typography>
                        <Typography sx={{color:'#fff'}}>Terminos y condiciones</Typography>
                    </Box>
                    <Box sx={{marginLeft:'5rem'}}>
                        <Typography sx={{color:'#fff', marginBottom:'15px'}}>Metodos de envios</Typography>
                        <Typography sx={{color:'#fff'}}>Politica de privacidad</Typography>
                    </Box>
                </Box>
            </Box>
      
            <Box  sx={{display:'flex', margin:'20px 0 40px 0', border:'1px solid #fff', maxWidth:'250px', marginLeft:'50%', justifyContent:'center', transform:'translateX(-50%)'}}>
                <Typography sx={{color:'#fff'}}>Boton de arrepentimiento</Typography>
            </Box>


        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Box sx={{textAlign:'center', marginRight:'5%'}}>
                <Typography sx={{color:'#fff', marginBottom:'10px'}}>Medios de pago</Typography>
                <Image
                    src={'/images/medios-pagos.png'}
                    alt="Pagos"
                    width={250}
                    height={100}
                />
            </Box>
            <Box sx={{display:'flex', flexDirection:{sm:'column',md:'row'}, alignItems:'center', marginLeft:'5%'}}>
                <PiSpotifyLogo color={'#fff'} size={30} style={{marginLeft:'10px', marginBottom:'10px'}}/>
                <AiOutlineYoutube color={'#fff'} size={30} style={{marginLeft:'10px', marginBottom:'10px'}}/>
                <FaFacebookF color={'#fff'} size={30} style={{marginLeft:'10px', marginBottom:'10px'}}/>
                <AiOutlineInstagram color={'#fff'} size={30} style={{marginLeft:'10px', marginBottom:'10px'}}/>
            </Box>
        </Box> 
        <Box sx={{marginTop:'40px'}}>
            <Typography sx={{color:'#fff', textAlign:'center'}}>Jewerly-Proyect S.R.L. 2023 Todos los derechos reservados-</Typography>
            <Typography sx={{color:'#fff', textAlign:'center', marginTop:'20px'}}>Powered by Theno</Typography>
        </Box> 
        <Box sx={{display:'flex', justifyContent:'end'}}>
            <IconButton href="/">
                <SlArrowUp color={'#fff'} style={{margin:'20px 20px'}} size={30}/>
            </IconButton>
        </Box>
     </Box>
        
        
    )

}


export default FooterSm