
'use client'

import { Box, IconButton, Typography } from "@mui/material"
import Image from "next/image"
import CartButton from "./CartButton"
import ProfileButton from "./ProfileButton"
import MobileMenuButton from "./MobileMenuButton"
import SecondBUttonDrawer from "./SecondButtonDrawer"


const styles = {
    container: {
        display:'flex', 
        flexDirection:'row', 
        backgroundColor:'#fff', 
        justifyContent:'space-between',
        padding:'5px 0 5px 5%',
        height:{
            xs:'76px',
            sm:'85px'
        }
    }
}


const Navbar = () => {

  
    return (
        <Box sx={styles.container}>

            <Box sx={{display:'flex',flexDirection:{xs:'row',sm:undefined,md:'row'}, alignItems:'center'}}>
                <IconButton>
                    <Image
                        src={'/images/nav3.png'}
                        alt="LogoNav"
                        width={74}
                        height={50}
                    />
                </IconButton>
                <Typography sx={{display:{xs:'flex',sm:'none',md:'flex'}, fontWeight:'bold'}}>Jewerly Proyect</Typography>
                <SecondBUttonDrawer/>
            </Box>

            <Box sx={{display:{xs:'none',md:'flex'}, flexDirection:'row', alignItems:'center'}}>
                <Box sx={{backgroundColor:'#cdcdcd', width:'0.5px', height:'100%', margin:'0 10px 0 10px'}}/>
                <IconButton>
                    <Typography sx={{fontSize:'10px', color:'#000'}}>
                        Preguntas Frecuentes
                    </Typography>
                </IconButton>
                <Box sx={{backgroundColor:'#cdcdcd', width:'0.5px', height:'100%', margin:'0 10px 0 10px'}}/>
                <IconButton>
                    <Typography sx={{fontSize:'15px', color:'#000'}}>
                        Joyas
                    </Typography>
                </IconButton>
                <Box sx={{backgroundColor:'#cdcdcd', width:'0.5px', height:'100%', margin:'0 10px 0 10px'}}/>
                <IconButton>
                    <Typography sx={{fontSize:'15px', color:'#000'}}>
                        Envios
                    </Typography>
                </IconButton>
                <Box sx={{backgroundColor:'#cdcdcd', width:'0.5px', height:'100%', margin:'0 10px 0 10px'}}/>
                <IconButton>
                    <Typography sx={{fontSize:'15px', color:'#000'}}>
                        Contacto
                    </Typography>
                </IconButton>
                <Box sx={{backgroundColor:'#cdcdcd', width:'0.5px', height:'100%', margin:'0 10px 0 10px'}}/>
                <IconButton>
                    <Typography sx={{fontSize:'15px', color:'#000'}}>
                        Custom
                    </Typography>
                </IconButton>
                <Box sx={{backgroundColor:'#cdcdcd', width:'0.5px', height:'100%', margin:'0 10px 0 10px'}}/>

            </Box>
            
            <MobileMenuButton/>

            <Box sx={{display:{xs:'none',sm:'flex'}}}>
                <Box sx={{backgroundColor:'#cdcdcd', width:'1px', height:'100%', margin:'0 10px 0 10px'}}/>
                <ProfileButton/>
                <Box sx={{backgroundColor:'#cdcdcd', width:'1px', height:'100%', margin:'0 10px 0 10px'}}/>
                <CartButton/>
                <Box sx={{backgroundColor:'#cdcdcd', width:'1px', height:'100%', margin:'0 10px 0 10px'}}/>
            </Box>

        </Box>
    )

}


export default Navbar
