import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import TocIcon from '@mui/icons-material/Toc';


import "../Sidebar/menu.css"



const Menu = () => {



  return (
    
    <div>
      <aside className="main-sidebar ">
        {/* Brand Logo */}

        {/* Sidebar */}
        <div className="sidebar">

          {/* Sidebar Menu */}
          <nav className="mt-5">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" >
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}


              <li className="nav-item">
                <div className="nav-link ">

                  <DashboardIcon />
                  <p>
                    <Link to="/dashboard"> Dashboard</Link>
                  </p>
                </div>
                
              </li>

            
             
              <li className="nav nav-item" >
                <div className="nav-link " >
                  
                  <SwitchAccountIcon />
                  <p >
                    Manage Accounts
                    <i className="right fas fa-angle-left" />
                  </p>
                </div>
                <ul className="dropdown nav-treeview" >

                  <li className="nav-item" >
                    <div className="nav-link" >

                      <AccountCircleIcon />
                      <p >
                        <Link to="/accounts">Accounts</Link>
                      </p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <GroupsIcon />
                      <p>
                        <Link to="/clients">Clients</Link>
                      </p>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      <ImportExportIcon />
                      <p>
                        <Link to="/import-export">Import/Exports</Link>
                      </p>
                    </div>
                  </li>
                </ul>
                
              </li>
            
              <li className="nav-item">
                <div className="nav-link">
                  <AssessmentIcon />
                  <p><Link to="/register2">Assesements</Link></p>
                </div>
              </li>

              <li className="nav nav-item has-treeview menu-open"  id='open-dropdown'>
                <div className="nav-link" >
                  <SettingsIcon />
                  <p >
                    Settings
                    <i className="fas fa-angle-left right" />
                  </p>
                </div>
                <ul className="dropdown nav-treeview">
                 <li className="nav-item">
                    <div className="nav-link">
                      <TocIcon />
                      <p>
                        <Link to="/admin-statement">Statements</Link>
                      </p>
                    </div>
                  </li>

                </ul>
              </li>

              <li className="nav-item">
                <div className="nav-link">
                  {/* <i class="nav-icon bi bi-journal-check"></i> */}
                  <ReportIcon />
                  <p>
                    <Link to="/reports">Reports</Link>
                  </p>
                </div>
              </li>
               
          
   

            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>

  )
}


export default Menu