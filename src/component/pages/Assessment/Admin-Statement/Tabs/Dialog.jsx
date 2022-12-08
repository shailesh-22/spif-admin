import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../../Custom Hook/useFetch';

export default function AlertDialog({previousQuestion,open,handleClose}) {


  // let{ questions: data } = useFetch(`http://103.160.153.38:8020/limens/statements_view/${getValue}/`)

 

  const [sDescription, setsDescription] = useState(previousQuestion.sDescription);
  const [sOptions, setsOptions] = useState(previousQuestion.sOptions);


  let history = useHistory();

  // let handleSubmit = ()=>{

  //     let updateStatement  = {sDescription };

  //     const getitem = localStorage.getItem("items")
   
  //       //   fetch(`http://103.160.153.38:8020/limens/statements_view/${getitem}/`,
  //       //  {
  //       //    method: "PUT",
  //       //    headers: {
  //       //       "Accept": "application/json",
  //       //       "Content-Type":"application/json"
  //       //   },
  //       //    body : JSON.stringify(updateStatement)
  //       //  })

  //       //  .then(()=>{ history.push('/') })
  //        console.log(getitem);
  //        }
  
  const hamdleUpdate = ()=> {
    const getValue = localStorage.getItem("items")

    const updateValue = {sDescription , sOptions}
    
    // fetch(`http://103.160.153.38:8020/limens/statements_view/${getValue}/`, {
    //   method: "PUT",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updateValue),
    // }).then(() => {
    //   history.push("/admin-statement");
    // });
    
    // localStorage.removeItem("items");
    console.log(updateValue);
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
          {"Update this Statement !"}
        </DialogTitle>
        <DialogContent>
         <form >
            <div  >
               <TextField  type="text" value={sDescription} onChange={(e)=>{setsDescription(e.target.value)}} /> 
               <TextField  type="text" value={sOptions} onChange={(e)=>{setsOptions(e.target.value)}} /> 
            </div>
           
         </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  autoFocus onClick={()=>{hamdleUpdate()}} >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
