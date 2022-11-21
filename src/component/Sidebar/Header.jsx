import React from 'react'
import '../Sidebar/header.css'
import {Link} from 'react-router-dom'
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout'
import MenuItem from '@mui/material/MenuItem';

const settings = ['Logout'];

const Header = () => {


  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
       
      const handleLogout = ()=>{
        localStorage.removeItem("token");
        window.location('./login');
    }
       
    return (
      <div>
  <nav className="main-header navbar  navbar-expand" >
    {/* Left navbar links */}
    <ul className="navbar-nav d-flex ">
      <li className="nav-item ">
        <div className="nav-link " data-widget="pushmenu" >
          {/* <i className="fas fa-bars" /> */}
          <MenuIcon style={{color:"white"}}/>
          </div>
      </li>
      {/* <li className=" nav-item d-flex align-item-center ">
        
            <img src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" alt="logo" width={105}  />
      
      </li> */}
    </ul>
   
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      
      {/* Notifications Dropdown Menu */}

      {/* <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" >
    
        <AccountCircleIcon/>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
         
          <div className="dropdown-divider " />
          <a  className="dropdown-item">
            <i className="fas" /> 

           <Link to="/" class="dropdown-item" onClick={handleLogout} >Logout</Link>
         
          </a>
         
         
        </div>
         </li> */}

      <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                 <Link to=""> <Typography textAlign="center" style={{color:"black"}} width={100} onClick={handleLogout}> <LogoutIcon style={{margin:"0 8px", color:"black"}}/>{setting}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <li class="nav-item">
        <div class="nav-link" data-widget="fullscreen" role="button" style={{color:"white"}}>
          <AspectRatioIcon/>
        </div>
      </li>
      
    </ul>
  </nav>
</div>

      



    
  )
}

export default Header