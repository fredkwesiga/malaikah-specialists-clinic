import React from "react";
import { NavLink } from "react-bootstrap";
import './sidenav.css'

function SideNavbar() {
  return (
    
    <div style={{ marginTop: '1%', paddingTop: '2.5%' }}>
      <header className="container">
       
      </header>
      <div class="sidebar-container">
        <ul class="sidebar-navigation">
          <li class="header">Dashboard</li>
          <li>
            <a href="/profile" id="current">
              <img src="/images/profileicon.png " alt="" style={{ width: '20%', height: '20%' }}/>
              Profile
            </a>
          </li>
          <li>
            <NavLink to="/appts" id="current">
              <img src="/images/bookappticon-01.png " alt="" style={{ width: '20%', height: '30px' }}/>
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="#" id="current">
              <img src="/images/medicalhist-icon-02.png " alt="" style={{ width: '20%', height: '30px' }}/>
              Medical History
            </NavLink>
          </li>
        </ul>
      </div>
   
    </div>
  );
}

export default SideNavbar;
