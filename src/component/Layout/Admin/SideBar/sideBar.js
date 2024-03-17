import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import '../../../../css/admin.css'

function SideBar() {

  function handleDashboardClick() {
    window.location = "/admin"
  }

  function handleRequestClick() {
    window.location = "/request"
  }

  function handleProductClick() {
    window.location = "/product"
  }

  function handleUserClick() {
    window.location = "/adminUser"
  }

  function handleHomeClick() {
    window.location = "/"
  }

  return (
    <div className="side-bar">
      <div className="side-group">
        <div className="logo-admin">
          <h2 style={{color:"black"}}>ZaiZach</h2>
        </div>
      </div>
      <div className="side-group">
        <div onClick={handleDashboardClick} className="dashboard">
          <p>Dashboard</p>
        </div>
      </div>
      <div className="side-group">
        <div onClick={handleRequestClick} className="dashboard">
          <p>Request Manage</p>
        </div>
      </div>
      <div onClick={handleProductClick} className="side-group">
        <div className="dashboard">
          <p>Product Manage</p>
        </div>
      </div>
      <div onClick={handleUserClick} className="side-group">
        <div className="dashboard">
          <p>User Manage</p>
        </div>
      </div>
      <div onClick={handleHomeClick} className="side-group">
        <div className="dashboard">
          <p>Home Page</p>
        </div>
      </div>

    </div>
  );
}

export default SideBar;
