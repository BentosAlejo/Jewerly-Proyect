'use client'

import { useState } from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, IconButton, Typography, Drawer } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AiOutlineShoppingCart } from 'react-icons/ai'



const tempCartQuant = 1

type Anchor = 'left' | 'right';



const CartButton = () => {


  const [cartDrawer, setCartDrawer] = useState({
    right: false
  })


  const generateKey = (arg1:any,arg2?:any) => {
  
    let key1 = `${Math.random()}-${arg1}`
    let key2 = `${Math.random()}-${arg1}-${arg2}`
  
    if(arg2){
      return key2
    }else{
      return key1
    }
  
  }


  const toggleCartDrawer =

  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setCartDrawer({ ...cartDrawer, [anchor]: open });
  };


  const cartList = (anchor: Anchor) => (

    <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={toggleCartDrawer(anchor, false)}
    onKeyDown={toggleCartDrawer(anchor, false)}
  >
     <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={generateKey(text,index)} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              cart list
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={generateKey(Math.random(),index)} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List> 
  </Box>
)



  return (


    <Box sx={{display:'flex', alignContent:'center'}}>
    {(['right'] as const).map((anchor, index)=>(
        <>

            <Box key={generateKey(anchor, index)}>
                <IconButton onClick={toggleCartDrawer(anchor,true)}>
                    <AiOutlineShoppingCart size={40} color={'#000'}/>
                    <Typography sx={{fontSize:18,fontWeight:'bold', color:'#000'}}>({tempCartQuant})</Typography>
                </IconButton>
            </Box>
            <Drawer
                anchor={anchor}
                open={cartDrawer[anchor]}
                onClose={toggleCartDrawer(anchor, false)}
            >
                {cartList(anchor)}
            </Drawer>


        </>

    ))}
</Box>
  )
}



export default CartButton