

import { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";



interface ProfileButtonProps {
    hasLoggedIn: boolean
}


const ProfileButton:React.FC<ProfileButtonProps> = ({hasLoggedIn}) => {

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
                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                        <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Box>
                ) : (
                    <Box>
                        <MenuItem onClick={()=>setLoginModal(true)}>Ingresar</MenuItem>
                        <MenuItem onClick={()=>setRegisterModal(true)}>Crear cuenta</MenuItem>
                    </Box>
                )
            }
        </Menu>
        <LoginModal open={loginModal} setOpen={setLoginModal}/>
        <RegisterModal open={registerModal} setOpen={setRegisterModal}/>
    </Box>
    )

}


export default ProfileButton