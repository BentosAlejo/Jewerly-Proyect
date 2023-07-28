

import { useState } from "react"
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, Divider, ListItemIcon, ListItemText } from "@mui/material"
import {FiMenu} from 'react-icons/fi'



type Anchor = 'left' | 'right';


const SecondBUttonDrawer = () => {



    const [secondState, setSecondState] = useState({
        left: false
      })

      const toggleSecondDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setSecondState({ ...secondState, [anchor]: open });
  };


  const secondList = (anchor: Anchor) => (

    <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={toggleSecondDrawer(anchor, false)}
    onKeyDown={toggleSecondDrawer(anchor, false)}
  >
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              second button
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
              second list
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)




    return(
        <Box sx={{display:{xs:'none',sm:'flex'}}}>
                {(['left'] as const).map((anchor) => (
                    <Box key={anchor}>
                    <Box sx={{display:{xs:'none', sm:'flex',md:'none'}}}>
                        <IconButton onClick={toggleSecondDrawer(anchor,true)}>
                            <FiMenu size={40} color={'#000'}/>
                        </IconButton>
                    </Box>
                    <Drawer
                        anchor={anchor}
                        open={secondState[anchor]}
                        onClose={toggleSecondDrawer(anchor, false)}
                    >
                        {secondList(anchor)}
                    </Drawer>
                    </Box>
                ))}
            </Box>
    )

}


export default SecondBUttonDrawer