import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Menus=()=>{
    return (
        
        <ListGroup>
            <Link className="list-group-item list-group-item-action"  to="/signup" > Click Here For Registartion</Link>
            {/* <Link className="list-group-item list-group-item-action"  to="/add-item" action>Add Item</Link>
            <Link className="list-group-item list-group-item-action"  to="/view-items" action>view Item</Link> */}
            <Link className="list-group-item list-group-item-action"  to="/login" action>Click here to Login</Link>
            {/* <Link className="list-group-item list-group-item-action"  to="#!" action>Contact Us</Link> */}

        </ListGroup>

    )
}

export default Menus;