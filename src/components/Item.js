import React,{ useState } from "react";

import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,

} from "reactstrap";
import UserLoginDetails from "./UserLoginDetails";


const Item=( props)=>{

    return(

      
    <div className="row mt-3">
      <UserLoginDetails/>
      <div className="col-5">
        <h2>
          {props.item.itemName}
          <span className="badge bg-secondary">₹{props.item.itemPrice}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.item.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.item.quantity * props.item.itemPrice}
      </div>

      </div>
    );
}

export default Item;


