import React, { useEffect } from "react";
import { jumbotron, Container, Button } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import   "./Home.css"

const Home=()=>{

    useEffect(()=>{
        document.title = "HOME"
    },[])
    return(
        <div className="home" >
            <jumbotron className="text-center bg-primay"> 
                <h1 >apna restraurent</h1>
                <p>
                    this is developed by ajay for food ordering purpose.its backend is on spring boot and frontend on reactjs 
                </p>
       <Container>
          <ListGroup>
            < Link to="/header" > Header</Link>
            <Link className="list-group-item list-group-item-action"  to="/signup" > Click Here For Registartion</Link>
            {/* <Link className="list-group-item list-group-item-action"  to="/add-item" action>Add Item</Link>
            <Link className="list-group-item list-group-item-action"  to="/view-items" action>view Item</Link> */}
            <Link className="list-group-item list-group-item-action"  to="/login" action>Click here to Login</Link>
            {/* <Link className="list-group-item list-group-item-action"  to="#!" action>Contact Us</Link> */}
         </ListGroup>
       </Container>
            </jumbotron>
        </div>
    )
}


export default Home;