import { Box } from "@mui/material"
import FooterXs from "./FooterXs"
import FooterSm from "./FooterSm"


const styles = {

    container:{
        padding: '65px 0 20px',
        background: '#000000'
    },

    subContainer:{
        maxWidth:'1440px',
        width:'100%',
        paddingRight:'15px',
        paddingLeft:'15px',
        marginRight:'auto',
        marginLeft:'auto'
    },
    xs:{
        display:{xs:'flex', sm:'none'}, 
        justifyContent:'center'
    },
    sm:{
        display:{xs:'none', sm:'flex'},
        justifyContent:'center'
    }

}

const Footer = () => {

    return (

        <Box sx={styles.container}>
            <Box sx={styles.subContainer}>
               <Box sx={styles.xs}>
                <FooterXs/>
               </Box>
               <Box sx={styles.sm}>
                <FooterSm/>
               </Box>
               
            </Box>
        </Box>

    )

}

export default Footer
