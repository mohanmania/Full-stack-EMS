import React from 'react'
import { NavLink } from 'react-router-dom';
import {FaBuilding, FaCalendar, FaCog, FaMoneyCheck, FaTachometerAlt, FaUsers} from "react-icons/fa"
function AdminSidebar() {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
    <div className='bg-teal-600 h-12 flex items-center justify-center'>
      <h3 className='text-2xl text-center font-pacific'>employee</h3>
    </div>
    <div>
    <NavLink to="/admin-dashboard"  className={"flex items-center space-x-4 block py-2,5 px-4 rounded"}> 

        <FaTachometerAlt/>
        <span>Dashboard</span>
    </NavLink>
    <NavLink to="/admin-dashboard"  className={"flex items-center space-x-4 block py-2,5 px-4 rounded"}> 

        <FaUsers/>
        <span>employees</span>
    </NavLink>
    <NavLink to="/admin-dashboard"  className={"flex items-center space-x-4 block py-2,5 px-4 rounded"}> 

        <FaBuilding/>
        <span>Departments</span>
    </NavLink>
    <NavLink to="/admin-dashboard"  className={"flex items-center space-x-4 block py-2,5 px-4 rounded"}> 

        <FaCalendar/>
        <span>Leaves</span>
    </NavLink>
    <NavLink to="/admin-dashboard"    className={"flex items-center space-x-4 block py-2,5 px-4 rounded"}> 
        
        <FaMoneyCheck/>
        <span>salary</span>
    </NavLink>
    <NavLink to="/admin-dashboard"  className={"flex items-center space-x-4 block py-2,5 px-4 rounded"}> 

        <FaCog/>
        <span>settings</span>
    </NavLink>
    </div>
    </div>
  )
}

export default AdminSidebar
