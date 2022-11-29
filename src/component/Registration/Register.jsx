import { Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import { CardContent } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useHistory } from "react-router-dom";

import { Formik } from 'formik';
// import { ClassNames } from '@emotion/react';
import swal from 'sweetalert';
import '../Registration/register.css'

import { addUser } from './api'
import Header3 from '../Sidebar/Header3';

// const useStyles = makeStyles((theme) => ({
//   inputField: {
//     width: "100%",
//     margin: theme.spacing(1, 0),
//   },
// }));




const initialValues = {
  firstName: "",
  lastName: "",
  email : "",
  phone: "",
  gender: "",
  date_of_birth: "",
  profession :"",
  street : "",
  city:"",
  state:"",
  country: "",
  pincode: ""
}


const Register = () => {




  const [user, setUser] = useState(initialValues);

  const history = useHistory()

  const onValueChange = (e) => {

    setUser({...user, [e.target.name]: e.target.value })
    console.log(user);
  }

  const addUserDetails = async () => {

    await addUser(user)     
      swal({
        title: "Done!",
        text: "Profile created successfully!",
        icon: "success",
        button: "Ok",
      });
    
      history.push('/terms_conditions')
      }


    // if( addUser.required === false) 
    // {
    //   swal({
    //     title: "Invalid input!",
    //     text: "Please fill the input details!",
    //     icon: "warning",
    //     button: "Ok",
    //   });
    // }
    // else{
    //   await addUser(user)     
    //   swal({
    //     title: "Done!",
    //     text: "Profile created successfully!",
    //     icon: "success",
    //     button: "Ok",
    //   });
    //   history.push('/terms_conditions')
    // }
      
   
      
      





  // const { inputregister, handleSubmit, control } = useForm();
  // const onSubmit = (data) => console.log(data);
 
  const reset = { margin: "20px 5px", background:"#00AD53", color:"white",}
  const submit = { background: "#346BFF", color:"white"}

  return (
    <div className="card-header"  >
      {/* <Header2 /> */}
      <Header3/>
      <div>
        <Typography gutterbutton variant="h4" align="center" style={{background:"#62C2CF" , maxWidth:1000, margin:"0 auto"}}>
          User Profile Details
        </Typography>
        
        <Card style={{ maxWidth: 1000, margin: "0 auto", padding: "0 5px"}} elevation={10} >
          <CardContent>
            <Typography gutterbutton variant="h5">Fill out your Basic details</Typography>
            <form action="/action_page.php" class="was-validated">

              <Typography variant="body2" align="left" style={{ padding: "20px 0px" }} gutterbutton >Personal info :</Typography>

              <Grid container spacing={4}>

                {/* Textfield */}
                <Grid xs={12} sm={4} item>
                  <TextField
                    label="First Name"
                    placeholder='Enter First Name'
                    variant="standard"
                    fullWidth
                    required
                    name='firstName'
                    onChange={(e) => onValueChange(e)}
                    
                  />

                </Grid>

                {/* Textfield */}
                <Grid xs={12} sm={4} item>
                  <TextField
                    label="Last Name"
                    placeholder='Enter Last Name'
                    variant="standard"
                    fullWidth
                    required
                    name='lastName'
                    onChange={(e) => onValueChange(e)}
                  // inputRef={inputregister}
                  />
                </Grid>

                {/* Textfield */}
                <Grid xs={12} sm={4} item>
                  <TextField
                    label="Email"
                    type="Email"
                    placeholder='Enter Email'
                    variant="standard"
                    fullWidth
                    required
                    name='email'
                    onChange={(e) => onValueChange(e)}
                  // inputRef={inputregister}
                  />
                </Grid>

                {/* Textfield */}
                <Grid xs={12} sm={4} item>
                  <TextField
                    label="Phone Number"
                    type="number"
                    placeholder='Enter Phone Number'
                    variant="standard"
                    fullWidth
                    required
                    name='phone'
                    onChange={(e) => onValueChange(e)}
                  // inputRef={inputregister}
                  />
                </Grid>

                {/* Textfield */}
                <Grid xs={12} sm={4} item>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    required
                    name="gender"
                  >
                    <FormControlLabel value="female" control={<Radio onChange={(e) => onValueChange(e)} />} label="Female" />
                    <FormControlLabel value="male" control={<Radio onChange={(e) => onValueChange(e)} />} label="Male" />
                    <FormControlLabel value="other" control={<Radio onChange={(e) => onValueChange(e)} />} label="Other" />
                  </RadioGroup>
                </Grid>

                <Grid xs={12} sm={4} item>
                  <Stack component="form" noValidate spacing={3}>
                    <TextField
                      id="date"
                      label="Date-of-Birth"
                      type="date"
                      defaultValue="2017-05-24"
                      required
                      sx={{ width: 220 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="date_of_birth"
                      onChange={(e) => onValueChange(e)}
                    />
                  </Stack>
                </Grid>


                <Grid xs={12} sm={4} item >
                  <FormControl fullWidth required variant="standard" >
                    <InputLabel id="demo-simple-select-label" >Profession</InputLabel>

                    <Select name="profession" onChange={(e) => onValueChange(e)}   >
                    {/* <MenuItem value="Choose Your Profession" >Choose Your Profession</MenuItem> */}
                      <MenuItem value="Employed" >Employed</MenuItem>
                      <MenuItem value="Business Owners" >Business Owners</MenuItem>
                      <MenuItem value="Seeking Employement" >Seeking Employement</MenuItem>
                      <MenuItem value="Student"  >Student</MenuItem>
                      <MenuItem value="Parent" >Parent</MenuItem>
                      <MenuItem value="Others" >Others</MenuItem>

                    </Select>
                  
                  </FormControl>
                </Grid>

              </Grid>

              <Typography variant="body2" gutterbutton style={{ padding: "30px 0px" }} >Address :</Typography>

              <Grid container spacing={4}>

                <Grid xs={12} sm={4} item>
                  <TextField label="Street" placeholder='Enter street' variant="standard" name="street" onChange={(e) => onValueChange(e)} fullWidth required />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField label="City" placeholder='Enter city name' variant="standard" name="city" onChange={(e) => onValueChange(e)} fullWidth required  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField label="State" placeholder='Enter State' variant="standard" name="state" onChange={(e) => onValueChange(e)} fullWidth required />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField label="Country" placeholder='Enter Country Name' variant="standard" name="country" onChange={(e) => onValueChange(e)} fullWidth required />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField label="Pincode" placeholder='Enter pincode number' variant="standard" name="pincode" onChange={(e) => onValueChange(e)} fullWidth required />
                </Grid>



                <Grid xs={12} align="center" item>

                  <Button style={reset} type='reset' variant="contained" color="primary"  >Reset</Button>
                  <Button  onClick={() => addUserDetails()}   variant="contained" style={submit} >Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      
      </div>
    
    </div>
    
  )
}

export default Register