import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
export default function AlertDialog({open,handleClose}) {

  let navigate = useNavigate();

  const hamdleUpdate = ()=> {
    
    swal({
      title: "Done!",
      text: "Profile created successfully!",
      icon: "success",
      button: "Ok",
    });
    navigate('/terms_conditions')
  
  }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{textAlign:"center"}}>
          {"Enter the OTP sent to your email address."}
        </DialogTitle>
        <DialogContent>
         <form >
            <div style={{ textAlign:"center"}}>
               <TextField  type="number" />         
            </div>
           
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  autoFocus onClick={()=>{hamdleUpdate()}} >
            Validate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
