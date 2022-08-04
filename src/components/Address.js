import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserLoginDetails from "./UserLoginDetails";
import LogOUt from "./LogOUt";

const Address=()=>{
const [address, setAddress]=useState({});
let navigate= useNavigate();


const addressHandler=(e)=>{
    e.preventDefault();
    setAddress(e.target.value);
}

const submit=(e)=>{

   navigate('/allrestaurant', { state: { Address : address}} );
  
}
    return(
        <div>
              
              <UserLoginDetails/>
            
              <LogOUt/>
                
              

            <form >
        
          <label htmlFor="address" className="form-label">Address</label>
          <input onChange={addressHandler} type="text" name="address" className="form-control" id="address"  placeholder="enter address here" required/>
          <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>

        </form>
        </div>
        

    )
}

export default Address;