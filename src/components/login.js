import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login=()=>{
    const [userLogin,setUserLogin]=useState({});
    //let navigate= useNavigate();

    const onLogin=(e)=>{
       e.preventDefault();
       axios.post('/login/',userLogin).then(
        (response)=>{
            console.log(response)
            console.log(response.data.statusCode);
              if(response.data.statusCode===200){
                localStorage.setItem('userInfo',JSON.stringify(response.data.res));
                console.log(response.data.res); 
                window.location.href='/Address';
                //use redirect code
            }else{
                console.error('INVALID LOGIN DETAILS');
                toast("INVALID USER LOGIN DETAILS ")
            }

        },(error)=>{
            console.log(error);
            
        });
        
    }


    const setVal=(e)=>{
        setUserLogin({...userLogin,[e.target.name]:e.target.value})
        //setPass(e,targert);
    }
    
    return (
        <div>
            <form action="#">
        <div className="mb-3">
          <label htmlFor="Enter name here" className="form-label">phoneNumber</label>
          <input onChange={setVal} type="number" name="phoneNumber"  className="form-control" id="number" max="10" placeholder="enter phoneNumber here" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password"  onChange={setVal} className="form-control" name="password" id="exampleInputPassword1" placeholder="enter password here" required />
        </div>
      
        <button type="submit" className="btn btn-primary" onClick={onLogin}>Submit</button>
      </form>
    
        </div>

    );
}

export default Login;