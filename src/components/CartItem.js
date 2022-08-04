import React, { useEffect, useState } from 'react'

import {  useLocation } from 'react-router-dom'
import axios from 'axios';
import CartHeader from './CartHeader';
import { useNavigate } from 'react-router-dom';
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




export default function CartItem() {

  const location = useLocation();
  const navigate= useNavigate();

  const[cartItem,setCartItem] = useState('');
  const [resId,setResId] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartId,setCartId] = useState(0);
 
 

  const userInfo=JSON.parse(localStorage.getItem('userInfo'));
  const phoneNumber=userInfo[0].phoneNumber;

  var SelectedItems= location.state.SelectedItems;
  
  //console.log("before set :",cartItem);
    useEffect(() => {
      axios.post('/addtocart/'+phoneNumber, SelectedItems).then(
        (response)=>{
          console.log(response)
          console.log(response.data)
          setTotalAmount(response.data.totalAmount);
          setResId(response.data.items[0].restaurantId);
          setCartId(response.data.cartId)
          setCartItem(response.data.items);

          
        },
          (error)=>{
          console.log(error);
        
       }
       );
    },[]);

    const payNow=()=>{
      
      console.log("paynow clicked");
      navigate('/orderinit', {state : {TotalAmount:totalAmount, PhoneNumber:phoneNumber,RestaurantId:resId,CartId:cartId} });
    }
  
return (
  <div>

    <CartHeader/>
    <div>
    <div className='userId '  >
    <h3>USERID: { phoneNumber } </h3></div>
    <div className='restaurantId'>
      <h3>RESTAURANTID : { resId }</h3>
      
    </div>
    </div>
    
       { cartItem.length > 0 ?
        (
            cartItem.map((row) => {
          return (
            <Card className="text-center">
           <CardBody>
             <label>   <CardSubtitle className="font-weight-bold">ITEM NAME = {row.itemName}</CardSubtitle> </label><br/>
             <label>   <CardText >ITEM PRICE = ₹{row.itemPrice}</CardText></label> <br/>
             <label>   <CardText>ITEM QUANTITY = {row.quantity}</CardText></label> 
                 
                
             </CardBody>
              
         </Card>
             
             
            
          );
            })
            ) :(<h1>No items found</h1>)}


            <Container className="text-center">
            <CardFooter>TOTAL AMOUNT = ₹{totalAmount}</CardFooter> 
                <Button className="btn btn-warning ml-3 " onClick={payNow} >PAY NOW</Button>
            </Container>
</div>
  );
}
