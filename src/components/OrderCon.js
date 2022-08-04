import React, { useEffect, useState } from 'react'
import {  useLocation } from 'react-router-dom'
import axios from 'axios';

export default function OrderCon() {
    const location = useLocation();

    const [order,setOrder ] = useState('');

const orderPayLoad = {
    cartId: location.state.CartId,
    phoneNumber: location.state.PhoneNumber,
    restaurantId: location.state.RestaurantId,
    amount: location.state.TotalAmount
}

useEffect(()=>{
    console.log("orderPage")
    axios.post('/order/placeorder',orderPayLoad).then(
        (response)=>{
          console.log(response)
          console.log(response.data)
          setOrder(response.data)
        },
          (error)=>{
          console.log(error);
        
       }
       );

},[])


  return (
    
    <div>
      <div className="thankyou">
        <h1 >THANK YOU</h1>
      </div>
      <h2>UserId:{order.userId}</h2>
       <h2>OrderId:{order.orderId}</h2>
       <h2>TransactionId:{order.transactionId}</h2>
       
    </div>
  );
}
