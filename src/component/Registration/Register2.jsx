import { Typography, Card, Grid, TextField, Button } from '@material-ui/core'
import { CardContent } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import React from 'react'
import Stack from '@mui/material/Stack';
import { useForm, Controller } from "react-hook-form"
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import Header2 from '../Sidebar/Header2';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));


const Register2 = () => {


  const { inputregister, handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  const margin = { margin: "20px 5px" }

  return (
    <div>
      <Header2 />
      <div>
        <Typography gutterbutton="true" variant="h3" align="center">
          Your Profile Details
        </Typography>
        <Card style={{ maxWidth: 1500, margin: "0 auto", padding: "0px 12px" }}>
          <CardContent>
            <Typography gutterbutton="true" variant="h5">Fill out your Basic details</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>

              <Typography variant="body2" align="left" style={{ padding: "20px 0px" }} gutterbutton="true" >Personal info :</Typography>

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
                    inputRef={inputregister}
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
                    inputRef={inputregister}
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
                    inputRef={inputregister}
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
                    inputRef={inputregister}
                  />
                </Grid>

                {/* Textfield */}
                <Grid xs={12} sm={4} item>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio inputRef={inputregister} />} label="Female" />
                    <FormControlLabel value="male" control={<Radio inputRef={inputregister} />} label="Male" />
                    <FormControlLabel value="other" control={<Radio inputRef={inputregister} />} label="Other" />
                  </RadioGroup>
                </Grid>

                <Grid xs={12} sm={4} item>
                  <Stack component="form" noValidate spacing={3}>
                    <Controller
                    render={(props) =>(
                      <TextField
                      id="date"
                      label="Date-of-Birth"
                      type="date"
                      defaultValue="2017-05-24"
                      value={props.value}
                      onChange={props.onChange}
                      sx={{ width: 220 }}
                      InputLabelProps={{
                      shrink: true,
                      }}
                    />
                    )}
                    name="date_of_birth"
                    control={control}
                    />
                    
                  </Stack>
                </Grid>


                <Grid xs={12} sm={4} item>
                  <FormControl fullWidth variant="standard" className={ClassNames.inputField}>
                    <InputLabel id="demo-simple-select-label">Profession</InputLabel>
                    <Controller
                      render={(props) => (
                        <Select value={props.value} onChange={props.onChange}>
                        {/* <MenuItem value="">Select your profession</MenuItem> */}
                        <MenuItem value="Employed">Employed</MenuItem>
                        <MenuItem value="Business Owners">Business Owners</MenuItem>
                        <MenuItem value="Seeking Employement">Seeking Employement</MenuItem>
                        <MenuItem value="Student">Student</MenuItem>
                        <MenuItem value="Parent">Parent</MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                      )}
                      name="profession"
                      control={control}
                      // defaultValue="ui/ux"
                    />
                  </FormControl>
                </Grid>

              </Grid>

              <Typography variant="body2" gutterbutton="true" style={{ padding: "30px 0px" }} >Address :</Typography>

              <Grid container spacing={4}>

                <Grid xs={12} sm={4} item>
                  <TextField label="Street" placeholder='Enter street' variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField label="City" placeholder='Enter city name' variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField label="State" placeholder='Enter State' variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField label="Country" placeholder='Enter Country Name' variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField label="Pincode" placeholder='Enter pincode number' variant="standard" fullWidth required />
                </Grid>



                <Grid xs={12} align="center" item>

                  <Button style={margin} type='reset' variant="outlined" color="primary"  >Reset</Button>
                  <Button type='submit' variant="contained" color="primary" >Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Register2