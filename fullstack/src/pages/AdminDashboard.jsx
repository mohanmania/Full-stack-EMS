import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/dashboard/AdminSidebar';
function AdminDashboard() {
  const {user} = useAuth();
  const navigate = useNavigate()
 
  return (
    <div className='text-'>
    {/* admin{user && user.name} */}
    <AdminSidebar/>
      
    </div>
  )
}

export default AdminDashboard
