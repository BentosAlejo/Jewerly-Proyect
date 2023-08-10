'use client'

import { useState } from "react";
import { Typography, Box, IconButton } from "@mui/material"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LoopIcon from '@mui/icons-material/Loop';
import LockIcon from '@mui/icons-material/Lock';


const styles = {
    iconContainer:{
        display:'flex',
        flexDirection:'row'
    },
    container:{
        display:'flex',
        flexDirection:'column'
    },
    smBox:{
        display:{xs:'none', md:'flex'},
        flexDirection:'row', 
        justifyContent:'space-between', 
        width:'90%'
    }
}


const HomeBanner = () => {

    const [display, setDisplay] = useState('shipping')

    const shipping = (
        <Box sx={styles.container}>
            <Box sx={styles.iconContainer}>
                <LocalShippingIcon/>
                <Typography>Envios</Typography>
            </Box>
            <Typography>A todo el pais</Typography>
        </Box>
    )

    const delivery = (
        <Box sx={styles.container}>
            <Box sx={styles.iconContainer}>
                <LoopIcon/>
                <Typography>Retiros</Typography>
            </Box>
            <Typography>En Buenos Aires</Typography>
        </Box>
    )

    const safeData = (
        <Box sx={styles.container}>
            <Box sx={styles.iconContainer}>
                <LockIcon/>
                <Typography>Sitio seguro</Typography>
            </Box>
            <Typography>Protegemos tus datos</Typography>
        </Box>
    )

   
    return(

        <Box sx={{width:'100%', margin:'50px 0 50px 0'}}>
            <Box sx={{display:{xs:'flex', md:'none'},flexDirection:'column', width:'100%',alignItems:'center'}}>
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    <IconButton onClick={()=>setDisplay('shipping')}> <Box sx={{width:'15px', backgroundColor:display === 'shipping' ? '#000' : '#fff', borderRadius:'50px', height:'15px', border:'2px solid black'}}/> </IconButton>
                    <IconButton onClick={()=>setDisplay('delivery')}> <Box sx={{width:'15px', backgroundColor:display === 'delivery' ? '#000' : '#fff', borderRadius:'50px', height:'15px', border:'2px solid black' }}/> </IconButton>
                    <IconButton onClick={()=>setDisplay('safeData')}> <Box sx={{width:'15px', backgroundColor:display === 'safeData' ? '#000' : '#fff', borderRadius:'50px', height:'15px', border:'2px solid black'}}/> </IconButton>
                </Box>
                <Box sx={{ marginTop:'40px', width:'100%', display:'flex', alignI:'center', justifyContent:'center'}}>
                    {display === 'shipping' && shipping}
                    {display === 'delivery' && delivery}
                    {display === 'safeData' && safeData}
                </Box>
            </Box>

            <Box sx={styles.smBox}>

                {shipping}

                {delivery}

                {safeData}

            </Box>
        </Box>
        
      
    )
}


export default HomeBanner