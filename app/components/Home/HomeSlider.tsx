'use client'


import { useState } from "react"
import { Box, IconButton } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const styles = {
    image:{
        width:'100%',
        heigth:'100%'
    },
    imageContainer:{
       
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        marginLeft:'50%',
        transform:'translateX(-50%)',
        minHeight:'250px',
        maxHeight:'650px',
        width:'90%'

    }
}



const HomeSlider = () => {


    const stages = [1,2,3]
    const [selected, setSelected] = useState(stages[0])
  
  
    const moveFoward = () => {
     
       
        if(selected === 3){
         return setSelected(1)
        }
        return setSelected(selected + 1)
    
    }
  
    const moveBack = () => {
    
  
    if(selected === 1 ){
     return setSelected(3)
    }
  
    return  setSelected(selected - 1)
    
    }
  

    return(
        <Box sx={{ display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between' }}>
          <IconButton onClick={moveBack}>
            <ArrowBackIosIcon/>
          </IconButton>

            <Box sx={styles.imageContainer}>
            {
              selected === 1 && (
              
                  <Box component={'img'} src='/images/slider1.webp' alt='1' sx={styles.image}/>
                
              )
            }
            {
              selected === 2 && (
            
                <Box component={'img'} src='/images/sliderr2.jpg' alt='2' sx={styles.image}/>
           
              )
            }
            {
              selected === 3 && (
              
                    <Box component={'img'} src='/images/slider3.jpg' alt='3'  sx={styles.image}/>
                 
              )
            }
            </Box>

          <IconButton onClick={moveFoward}>
            <ArrowForwardIosIcon/>
          </IconButton>
          

        </Box>
    )

}



export default HomeSlider