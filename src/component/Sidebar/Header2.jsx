import React, { Component } from 'react'
import '../Sidebar/header.css'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';

import '../Sidebar/header2.css'
const Header2 = () => {


  const handleLogout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
  }

  return (
    <div className='header2'>
      <nav class='navbar navbar-expand-lg'  >
        {/* Left navbar links */}
        <ul className="navbar-nav d-flex ">
          <li className=" nav-item d-flex align-item-center mx-4">

            <img src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" alt="logo" width={130} />

          </li>
        </ul>

        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">

          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">

          {/* <div class="dropdown">
                <button class="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <AccountCircleIcon />
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                </ul>
              </div> */}

            <a className="nav-link" data-toggle="dropdown" >
              {/* <i class="bi bi-person-circle"></i> */}
              <AccountCircleIcon />
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">

              <div className="dropdown-divider" />
              <a className="dropdown-item">
                <i className="fas" />

                <Link to="/" class="dropdown-item" onClick={handleLogout} >Logout</Link>

              </a>

            </div>
            
           

          </li>
          <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" role="button">
              <AspectRatioIcon />
            </a>
          </li>

        </ul>
      </nav>
    </div>






  )
}

export default Header2