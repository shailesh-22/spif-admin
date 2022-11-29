import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

const settings = ['Logout'];

function Header3() {


  const handleLogout = ()=>{
    localStorage.removeItem("token");
    window.location('./login');
}
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);

 
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" >
      <Container maxWidth="x2" style={{background: "linear-gradient(to right, #346BFF , #00AD53)"}}>
        <Toolbar disableGutters style={{display:"flex" , justifyContent:"space-between", alignContent:"center", }} >

          

          <Link to="/dashboard" style={{ backgroundColor:"white"}}> 
            <img src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" alt="logo" width={105}  />
            </Link>
         
         
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings" style={{marginRight:"30px"}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}  >
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                 <Link to=""> 
                         <Typography textAlign="center" style={{color:"black"}} width={100} onClick={handleLogout} > <LogoutIcon style={{margin:"0 8px"}}/>{setting}</Typography>
                 </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header3;
