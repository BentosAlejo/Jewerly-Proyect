import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/Navbar/Navbar'
import { Box, Typography, Slide } from '@mui/material'


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
        <Box>
          <Typography>Soy el home</Typography>
        </Box>
        <Box>
          {/* <Slide children={'/images/images.png'}/> */}
        </Box>
      </Box>
 
  )
}
