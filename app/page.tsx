

import { Box } from '@mui/material'
import HomePage from './components/Home/HomePage'


const main = {
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '6rem',
    minHeight: '100vh'
  
}


export default function Home() {


  return (
 
      <Box sx={main}>
        <HomePage/>


      </Box>
 
  )
}
