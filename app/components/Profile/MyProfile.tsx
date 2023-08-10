
'use client'

import getCurrentUser from "@/app/actions/getCurrentUser"
import { Box } from "@mui/material"







const MyProfile = async () => {


    const currentUser = await getCurrentUser()
    return(

      
            <Box>
                <Box sx={{
                    backgroundImage:'/images/banner.jpg',
                    width:'90%',
                    height:'85px'
                }}/>
            </Box>
     
    )
}



export default MyProfile