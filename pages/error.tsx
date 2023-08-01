import { Box, Typography } from "@mui/material"

const ErrorPage = () => {

return (

    <Box sx={{display:'flex', flexDirection:'row', margin:'auto 50%'}}>
        <Box>
            <Typography>Not found</Typography>
        </Box>
        <Box sx={{width:'2px', height:'20px', backgroundColor:'#000'}}/>
        <Box>
            <Typography>404</Typography>
        </Box>
    </Box>

)

}



export default ErrorPage