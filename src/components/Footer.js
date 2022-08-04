import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Footer(props) {

    let navigate = useNavigate();
    console.log('footer',props);
    

    const newItemList=props.newItemList; 
  

    const viewCart=()=>{
         navigate('/cartitem', {state :{  SelectedItems : newItemList}});
    }
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => { props.resetQuantity(); }}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        {props.totalAmount}
      </div>
      <button className="btn btn-primary col-2" onClick={viewCart}>Add Cart</button>
    </div>
  );
}
