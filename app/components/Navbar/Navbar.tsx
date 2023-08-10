
'use client'

import { useRouter } from "next/navigation"
import { Box, IconButton, Typography } from "@mui/material"
import Image from "next/image"
import CartButton from "./CartButton"
import ProfileButton from "./ProfileButton"
import MobileMenuButton from "./MobileMenuButton"
import SecondBUttonDrawer from "./SecondButtonDrawer"
import { useState } from "react"
import { SafeUser } from "@/app/types"
import Link from "next/link"


interface NavbarProps {
    currentUser?: SafeUser | null
}


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



const Navbar:React.FC<NavbarProps> = ({currentUser}) => {
    
    const router = useRouter()
    const [hasLoggedIn, setHasLoggedIn] = useState(false)


    

    // if(currentUser !== null || currentUser){
    //    console.log(currentUser)
    // }

    
    return (
        <Box sx={styles.container}>

            <Box sx={{display:'flex',flexDirection:{xs:'row',sm:undefined,md:'row'}, alignItems:'center'}}>
                <Link href={'/'}>
                    <Image
                        src={'/images/nav3.png'}
                        alt="LogoNav"
                        width={74}
                        height={50}
                    />
                </Link>
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
                {/* <Link href={'Contact'}>
                    <Typography sx={{fontSize:'15px', color:'#000'}}>
                        Contacto
                    </Typography>
                </Link> */}
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
                <ProfileButton hasLoggedIn={hasLoggedIn} setHasLoggedIn={setHasLoggedIn}/>
                <Box sx={{backgroundColor:'#cdcdcd', width:'1px', height:'100%', margin:'0 10px 0 10px'}}/>
                <CartButton/>
                <Box sx={{backgroundColor:'#cdcdcd', width:'1px', height:'100%', margin:'0 10px 0 10px'}}/>
            </Box>

        </Box>
    )

}


export default Navbar