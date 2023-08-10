
import { Box, Typography } from "@mui/material"


const Contact = () => {
    return(
        <>
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
                backgroundColor:'#fb8fe5',
                width:'100%',
                height:'200px',
                opacity:'0.5'
                
                }}>
            </Box>
            </Box>
            <Typography sx={{fontWeight:'bold', color:'#000', position:'absolute', top:250, fontFamily:'fantasy', letterSpacing:'.5em', fontSize:'2rem'}}>CONTACTO</Typography>
        </>
     
    )
}

export default Contact