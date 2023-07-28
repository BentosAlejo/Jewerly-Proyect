
import { Box, Typography, IconButton } from '@mui/material'
import Image from 'next/image'
import { PiSpotifyLogo } from 'react-icons/pi'
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { SlArrowUp } from 'react-icons/sl'

const FooterXs = () => {

    return(
        <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column'}}>

        

            <Box sx={{display:{xs:'flex', sm:'none'}, justifyContent:'center'}}>
                <Image src={'/images/images.png'} alt="LogoFooter" width={150} height={180}/>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'40px'}}>
                <Typography sx={{color:'#fff', marginLeft:'10px'}}>Home</Typography>
                <Typography sx={{color:'#fff', marginLeft:'10px'}}>Joyas</Typography>
                <Typography sx={{color:'#fff', marginLeft:'10px'}}>Menciones</Typography>
                <Typography sx={{color:'#fff', marginLeft:'10px'}}>Contacto</Typography>
            </Box>
       


            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:{xs:'80%', sm:'50%'}, margin:'60px auto'}}>
                <Box>
                    <Typography sx={{color:'#fff', fontSize:14, fontWeigth:400}}>Opciones de pago</Typography>
                    <Typography sx={{color:'#fff', fontSize:14, marginTop:'10px'}}>Terminos y condiciones</Typography>
                </Box>
                <Box>
                    <Typography sx={{color:'#fff', fontSize:14}}>Metodos de envios</Typography>
                    <Typography sx={{color:'#fff', fontSize:14, marginTop:'10px'}}>Politica de privacidad</Typography>
                </Box>
            </Box>
        


        <Box sx={{display:'flex', marginTop:'20px', border:'1px solid #fff', maxWidth:'250px', marginLeft:'50%', justifyContent:'center', transform:'translateX(-50%)'}}>
            <Typography sx={{color:'#fff', fontSize:14}}>Boton de arrepentimiento</Typography>
        </Box>


        <Box sx={{display:'flex', marginTop:'40px', flexDirection:'column', alignItems:'center'}}>
            <Typography sx={{fontWeight:'bold', color:'#fff', fontSize:15, marginBottom:'10px'}}>MEDIOS DE PAGO</Typography>
            <Image src={'/images/medios-pagos.png'} alt="IMGPAGOS" height={65} width={250}/>
        </Box>


        <Box sx={{marginTop:'40px', display:'flex', justifyContent:'center'}}>
            <Box>
                <PiSpotifyLogo color={'#fff'} size={30}/>
                <AiOutlineYoutube  color={'#fff'} size={30} style={{marginLeft:'10px'}}/>
                <FaFacebookF color={'#fff'} size={30} style={{marginLeft:'10px'}}/>
                <AiOutlineInstagram color={'#fff'} size={30} style={{marginLeft:'10px'}}/>
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


export default FooterXs