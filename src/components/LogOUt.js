import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LogOUt() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/');
  }
    
  return (
    <div>
        <button className="list-group-item list-group-item-action" onClick={logout}  > LOGOUT</button>
    </div>
  )
}

