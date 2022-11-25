import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import TocIcon from "@mui/icons-material/Toc";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "../Sidebar/menu.css";

const Menu2 = () => {
  const marginIcon = { margin: "0 2px" };
  // const background = { background: "#346BFF"};
  const subMarginIcon = { margin: "0 5px" };

  return (
    <div>
      <aside className="main-sidebar">
        {/* Brand Logo */}

        {/* Sidebar */}
        <div className="sidebar">
          <nav className="d-flex align-items-center">
            <ul
                 class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
                  
        <Link to="/dashboard" >
        <li className="nav-item" style={{marginBottom:"7px"}}>
       <div
            className="nav-link"
            style={{ marginBottom: "0px" , backgroundColor:"white", }}
          >
       <img
              src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png"
              alt="logo"
              style={{ width: "138px" }}
            />
          </div> 
          </li>
        </Link>     


              <Accordion >
                <Link to="/dashboard">
                  <li className="nav-item mt-3">
                    <div className="nav-link">
                      <DashboardIcon />
                      <p>
                        <Typography style={marginIcon}> Dashboard</Typography>
                      </p>
                    </div>
                  </li>
                </Link>
              </Accordion>

              <li className="nav-item">
                <Accordion >
                  {/* Dropdown heading */}

                  <div className="nav-link py-0 px-0 m-1" id="settings">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                     
                    >
                      <SwitchAccountIcon/>
                      <p>
                        <Typography style={marginIcon}>
                          Manage Accounts
                        </Typography>
                      </p>
                    </AccordionSummary>
                  </div>
                  {/* Dropdown Sub heading */}
                  <div className="nav-link py-0">
                    <Link to="/accounts">
                      <AccordionDetails>
                        <AccountCircleIcon />
                        <Typography style={subMarginIcon}>Accounts</Typography>
                      </AccordionDetails>
                    </Link>
                  </div>

                  <div className="nav-link py-0">
                    <Link to="/clients">
                      <AccordionDetails>
                        <GroupsIcon />
                        <Typography style={subMarginIcon}>Clients</Typography>
                      </AccordionDetails>
                    </Link>
                  </div>

                  <div className="nav-link py-0">
                    <Link to="/import-export">
                      <AccordionDetails>
                        <ImportExportIcon />
                        <Typography style={subMarginIcon}>
                          Import/Exports
                        </Typography>
                      </AccordionDetails>
                    </Link>
                  </div>
                </Accordion>
              </li>

              <Accordion >
                <Link to="/register3">
                  <li className="nav-item">
                    <div className="nav-link m-1">
                      <AssessmentIcon />
                      <p>
                        <Typography style={marginIcon}>Assesements</Typography>
                      </p>
                    </div>
                  </li>
                </Link>
              </Accordion>

              <li className="nav-item">
                <Accordion >
                  {/* Dropdown heading */}
                  <div className="nav-link py-0 px-0 m-1" id="settings">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <SettingsIcon />
                      <p>
                        <Typography style={marginIcon}>Settings</Typography>
                      </p>
                    </AccordionSummary>
                  </div>
                  {/* Dropdown Sub heading */}
                  <div className="nav-link py-0">
                    <Link to="/admin-statement">
                      <AccordionDetails>
                        <TocIcon />
                        <Typography style={subMarginIcon}>
                          Statements
                        </Typography>
                      </AccordionDetails>
                    </Link>
                  </div>
                </Accordion>
              </li>

              <Accordion >
                <Link to="/reports">
                  <li className="nav-item">
                    <div className="nav-link m-1">
                      <ReportIcon />
                      <p>
                        <Typography style={marginIcon}> Reports</Typography>
                      </p>
                    </div>
                  </li>
                </Link>
              </Accordion>
            </ul>
          </nav>
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Menu2;
