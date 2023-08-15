
import { Box, Typography } from "@mui/material"


const Contact = () => {
    return(
        
        <Box sx={{width:'100%'}}>




            <Box sx={{
                backgroundImage:'url("/images/anuel.png")',
                width:'100%',
                height:'200px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                backgroundPosition:'center bottom',
                backgroundSize:'cover',
                }}>
            <Box sx={{
                // backgroundColor:'#fb8fe5',
                backgroundColor: 'rgba(200, 200, 200, 0.8)',
                width:'100%',
                height:'200px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <Typography sx={{fontWeight:'bold', color:'#000', fontFamily:'fantasy', letterSpacing:'.5em', fontSize:'2rem'}}>CONTACTO</Typography>
            </Box>
            </Box>
            <Box sx={{backgroundColor:'#fff', display:'flex', flexDirection:'column'}}>
                <Box component={'img'} alt="looogggoo" src="/images/diamond.jpg"/>
                <Box sx={{display:'flex', flexDirection:'column', textAlign:'center', padding:'0 30px 30px 30px'}}>
                    <Box component={'h2'}>CONSULTA POST COMPRA</Box>
                    <Typography sx={{margin:'15px 0 15px 0', lineHeight:'1.8em', letterSpacing:'0.2em'}}>
                    
                    Para realizar una consulta sobre una compra realizada en nuestro sitio web, le solicitamos que indique la venta Jewerly Proyect ID de venta -  estos se pueden encontrar en el correo electrónico de confirmación de compra que ha recibido.
                    </Typography>
                </Box>
            </Box>







        </Box>
        
     
    )
}

export default Contact