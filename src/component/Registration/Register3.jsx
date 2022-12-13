import {
  CardContent,
  Card,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Button,
} from '@mui/material';
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import Header3 from "../Sidebar/Header3";
import FormDialog from './Dialog'

const Register3 = () => {
  
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object().shape({
    // acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    street: Yup.string().required("street name is required"),
    city: Yup.string().required("City name is required"),
    state: Yup.string().required("State name is required"),
    country: Yup.string().required("Country name is required"),
    pincode: Yup.number().typeError("Pincode is required"),
    profession: Yup.string().required("Profession is required"),
    date_of_birth: Yup.date().required("Date of birth is required"),
    gender:Yup.string().required("gender is required"),
    number: Yup.number()
      .typeError("number is required")
      .min(10, "minimum value 10."),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    lastName: Yup.string().required("Last name is required"),
    firstName: Yup.string().required("First name is required"),

  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {

    console.log(JSON.stringify(data, null, 2));
    setOpen(true);  
     
  };
  const reset = { margin: "20px 5px", background: "#00AD53", color: "white",};
  const submit = { background: "#346BFF", color: "white", margin: "20px 5px" };

  return (
    <div>
        <div>
            <Header3/>
        </div>
    <div style={{marginTop:"64px"}}>
      <Typography
        gutterbutton
        variant="h4"
        align="center"
        style={{ background: "#62C2CF", maxWidth:"1000px", margin: "0 auto" }}
      >
        User Profile Details
      </Typography>
      <Card
        style={{ maxWidth:1000, margin: "0 auto", padding: "0 auto",backgroundColor:"#DCEEF1"}}
        elevation={10}
      >
        <CardContent>
          <Typography gutterbutton variant="h6">
            Fill out your Basic details
          </Typography>
          <form>
            <Typography
              variant="body2"
              align="left"
              style={{ padding: "20px 0px" }}
              gutterbutton
            >
              Personal info :
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Full Name"
                  variant="standard"
                  fullWidth
                  margin="dense"
                  {...register("firstName")}
                  error={errors.firstName ? true : false}
                />
                <Typography variant="standard" color="textSecondary">
                  {errors.firstName?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="standard"
                  fullWidth
                  margin="dense"
                  {...register("lastName")}
                  error={errors.lastName ? true : false}
                />
                <Typography variant="standard" color="textSecondary">
                  {errors.lastName?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  margin="dense"
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <Typography variant="standard" color="textSecondary">
                  {errors.email?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="number"
                  name="number"
                  label="Phone Number"
                  variant="standard"
                  type="number"
                  fullWidth
                  margin="dense"
                  {...register("number")}
                  error={errors.number ? true : false}
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.number?.message}
                </Typography>
              </Grid>

              <Grid xs={12} sm={4} item>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                

                 <Controller
                      control={control}
                      inputRef={register()}
                      name="gender"
                      required
                     id="gender"
                      {...register("gender")}
                  error={errors.gender ? true : false}
                      render={({ field: { onChange } }) => ( 
                       <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        required
                        
                        onChange={(e) => onChange(e.target.value)}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label="Other"
                        />
                          <Typography variant="inherit" color="textSecondary">
                  {errors.gender?.message}
                </Typography>
                      </RadioGroup> 
                       
                      )}
                    />

               
              </Grid>

              <Grid xs={12} sm={4} item>
                <Stack component="form" noValidate spacing={3}>
                

                <Controller
                      control={control}
                       name="date_of_birth"
                       {...register("date_of_birth")}
                       error={errors.date_of_birth ? true : false}
                     
                      inputRef={register()}
                      render={({ field: { onChange } }) => (
                        <TextField
                        id="date"
                        label="Date-of-Birth"
                        type="date"
                        variant="standard"
                        defaultValue="2017-05-24"
                        required
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => onChange(e.target.value)}
                        
                      />
                      )}
                    />
                     
                     <Typography variant="inherit" color="textSecondary">
                  {errors.date_of_birth?.message}
                </Typography>

       
                </Stack>
              </Grid>

              <Grid xs={12} sm={4} item>
                <FormControl fullWidth required variant="standard">
                  <InputLabel id="demo-simple-select-label">
                    Profession
                  </InputLabel>
                  
                  <Controller
                      control={control}
                      name="profession"
                      defaultValue=""
                      {...register("profession")}
                      error={errors.profession ? true : false}
                      inputRef={register()}
                      render={({ field: { onChange } }) => (
                         
                     <Select name="profession" onChange={(e) => onChange(e.target.value)}>
                    {/* <MenuItem value="Choose Your Profession" >Choose Your Profession</MenuItem> */}
                    <MenuItem value="Employed">Employed</MenuItem>
                    <MenuItem value="Business Owners">Business Owners</MenuItem>
                    <MenuItem value="Seeking Employement">
                      Seeking Employement
                    </MenuItem>
                    <MenuItem value="Student">Student</MenuItem>
                    <MenuItem value="Parent">Parent</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select> 
                      
                      )}
                    />
                  <Typography variant="inherit" color="textSecondary">
                  {errors.profession?.message}
                </Typography>

                </FormControl>
              </Grid>
            </Grid>

            <Typography
              variant="body2"
              gutterbutton
              style={{ padding: "30px 0px" }}
            >
              Address :
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="street"
                  name="street"
                  label="Street"
                  variant="standard"
                  fullWidth
                  margin="dense"
                  {...register("street")}
                  error={errors.street ? true : false}
                />
                <Typography variant="standard" color="textSecondary">
                  {errors.street?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="city"
                  name="city"
                  variant="standard"
                  label="City"
                  fullWidth
                  margin="dense"
                  {...register("city")}
                  error={errors.city ? true : false}
                />
                <Typography variant="standard" color="textSecondary">
                  {errors.city?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="state"
                  name="state"
                  variant="standard"
                  label="State"
                  fullWidth
                  margin="dense"
                  {...register("state")}
                  error={errors.state ? true : false}
                />
                <Typography variant="standard" color="textSecondary">
                  {errors.state?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="country"
                  name="country"
                  variant="standard"
                  label="Country"
                  fullWidth
                  margin="dense"
                  {...register("country")}
                  error={errors.country ? true : false}
                />
                <Typography variant="standard" color="textSecondary">
                  {errors.country?.message}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="pincode"
                  name="pincode"
                  label="pincode"
                  variant="standard"
                  type="number"
                  fullWidth
                  margin="dense"
                  {...register("pincode")}
                  error={errors.pincode ? true : false}
                />
                <Typography variant="standard" color="textSecondary">
                  {errors.pincode?.message}
                </Typography>
              </Grid>

              {/* <Grid item xs={12} align="center">
                <FormControlLabel
                  control={
                    <Controller
                      control={control}
                      name="acceptTerms"
                      defaultValue="false"
                      inputRef={register()}
                      render={({ field: { onChange } }) => (
                        <Checkbox
                          color="primary"
                          onChange={(e) => onChange(e.target.checked)}
                        />
                      )}
                    />
                  }
                  label={
                    <Typography
                      color={errors.acceptTerms ? "error" : "inherit"}
                    >
                      I have read and agree to the{" "}
                      <Link to="">Terms and Conditions</Link>
                    </Typography>
                  }
                />
                <br />
                <Typography variant="inherit" color="textSecondary">
                  {errors.acceptTerms
                    ? "(" + errors.acceptTerms.message + ")"
                    : ""}
                </Typography>
              </Grid> */}

              <Grid xs={12} align="center" style={{display:"flex" , justifyContent  :"center"}} >
                <Button
                  style={reset}
                  type="reset"
                  variant="contained"
                  color="primary"
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={submit}
                  // onClick={()=> {handleClickOpen()}}
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
    <FormDialog open={open} handleClose={handleClose}/> 
    </div>
  );
};

export default Register3;
