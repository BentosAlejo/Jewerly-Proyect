

import { Box } from '@mui/material'
import Contact from './components/Contact'


const main = {
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100vh'
  
}


export default function Home() {


  return (
 
      <Box sx={main}>
        <Contact/>


      </Box>
 
  )
}
