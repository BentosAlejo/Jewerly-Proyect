import { Box, Typography } from "@mui/material"


const HomeBottom = () => {

    return(
        <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'space-between', marginTop:'40px', width:'100%', alignItems:'center'}}>
            <Box sx={{minWidth:'300px', maxWidth:'400px'}}>
                <Box component={'img'} alt="chain" src="/images/chains.jpg" sx={{width:'100%', height:'100%'}}/>
            </Box>
            <Box sx={{minWidth:'300px', maxWidth:'400px'}}>
                <Box component={'img'} alt="pulsera" src="/images/pulsera.webp" sx={{width:'100%', height:'100%'}}/>
            </Box>
            <Box sx={{minWidth:'300px', maxWidth:'400px' , "&:hover":{transform: "scale(1.05)", opacity:'0.5'}}}>
                <Box component={'img'} alt="anillo" src="/images/anillos.jpg" sx={{width:'100%', height:'100%', transition: 'transform 0.2s'}}/>
               
            </Box>
        </Box>
    )

}


export default HomeBottom