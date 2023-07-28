



import { useState } from "react"
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material"
import {FiMenu} from 'react-icons/fi'



type Anchor = 'left' | 'right';





const MobileMenuButton = () => {

    const [state, setState] = useState({
        right: false,
      });

      const toggleDrawer =

      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };


      const list = (anchor: Anchor) => (
        <Box
          sx={{ width:250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    MobileMenu
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   list 1
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );



    return(


        <Box>
        {(['right'] as const).map((anchor) => (
            <Box key={anchor}>
            <Box sx={{display:{xs:'flex', sm:'none'}}}>
                <IconButton onClick={toggleDrawer(anchor,true)}>
                    <FiMenu size={40} color={'#000'}/>
                </IconButton>
            </Box>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
            >
                {list(anchor)}
            </Drawer>
            </Box>
        ))}
    </Box>

    )
}

export default MobileMenuButton