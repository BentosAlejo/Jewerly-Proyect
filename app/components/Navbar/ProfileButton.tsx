

import { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { signOut } from "next-auth/react";




interface ProfileButtonProps {
    hasLoggedIn: boolean
    setHasLoggedIn: (arg:boolean)=>void
}


const ProfileButton:React.FC<ProfileButtonProps> = ({hasLoggedIn, setHasLoggedIn}) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false)

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };


   
    

    return(
        <Box sx={{display:'flex', alignContent:'center'}}>
        <IconButton
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
        >
            <AiOutlineUser size={40} color={'#000'}/>
        </IconButton>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            {
                hasLoggedIn ? (
                    <Box>
                        <MenuItem onClick={()=>{}}>Perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                        <MenuItem onClick={()=>signOut()}>Logout</MenuItem>
                    </Box>
                ) : (
                    <Box>
                        <MenuItem onClick={()=>setLoginModal(true)}>Ingresar</MenuItem>
                        <MenuItem onClick={()=>setRegisterModal(true)}>Crear cuenta</MenuItem>
                    </Box>
                )
            }
        </Menu>
        <LoginModal open={loginModal} setOpen={setLoginModal} handleCloseMenu={handleClose} hasLoggedIn={hasLoggedIn} setHasLoggedIn={setHasLoggedIn}/>
        <RegisterModal open={registerModal} setOpen={setRegisterModal} handleCloseMenu={handleClose} hasLoggedIn={hasLoggedIn} setHasLoggedIn={setHasLoggedIn}/>
    </Box>
    )

}


export default ProfileButton