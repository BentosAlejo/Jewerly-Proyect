
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';



interface LoginModalProps {
    open:boolean
    setOpen: (arg: boolean) => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs:'90%',
    md:'50%',
    lg:'40%'
  },
  height:{
    xs:'90%',
    md:'50%',
    lg:'60%'
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display:'flex',
  flexDirection:'column'
};

const LoginModal:React.FC<LoginModalProps> = ({open, setOpen}) => {
  
  
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component={'form'}>
            <TextField id="outlined-basic" label="Correo electronico" variant="outlined" sx={{marginTop:'20px'}}/>
            <TextField id="outlined-basic" label="Contraseña" variant="outlined" sx={{marginTop:'20px'}}/>
            <Box sx={{marginTop:'20px', backgroundColor:'#000'}} component={'button'}>
                <Typography sx={{color:'#fff', fontWeight:'bold'}}>Ingresar</Typography>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}


export default LoginModal