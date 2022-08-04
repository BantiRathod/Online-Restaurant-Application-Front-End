import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Registration=()=>{

    const [userSignUp,setUserSignUp]=useState({});
    let navigate =  useNavigate();
    const signUp=(e)=>{
        e.preventDefault();
        axios.post('/signup/',userSignUp).then(
         (response)=>{
             console.log(response)
             if(response.status===200)
             {
                 console.log(response.data);
             }
             else{
                 console.log('Oops something went wrong!');
             }
 
         },(error)=>{
             console.log(error);
             
         })

         navigate('/login');
        
     }
    const setVal=(e)=>{
        setUserSignUp({...userSignUp,[e.target.name]:e.target.value})
    }
    
    return (
        <div>
             <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={setVal} type="name"  name="name" className="form-control" id="name" aria-describedby="name" placeholder="enter name " />
        
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">PhoneNumber</label>
          <input onChange={setVal} type="number" name="phoneNumber" className="form-control" id="phoneNumber" placeholder="enter phonenumber" />
        </div>
        <div className="mb-3">
        <label className="form-label" htmlFor="password">Password</label>
          <input onChange={setVal} type="password" name = "password" className="form-control" id="password" placeholder="enter password" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={signUp}>Submit</button>
      </form>
    
        </div>

    );
}

export default Registration;