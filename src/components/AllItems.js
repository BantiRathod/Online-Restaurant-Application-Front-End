import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios"
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const AllItems=()=>{

    let [totalAmount, setTotalAmount] = useState(0);
    
    const userInfo=JSON.parse(localStorage.getItem('userInfo'));
   // const phoneNumber=userInfo[].phoneNumber;
    const [items,setItems]=useState([])

    let location = useLocation();

    useEffect(()=>{
        document.title = "All ITEMS"
        getAllItemsFromServer();
    },[]);

    const incrementQuantity = (index) => {
        
      let newItemList =[...items];
      let newTotalAmount = totalAmount;
      newItemList[index].quantity++;
      newTotalAmount += newItemList[index].itemPrice;
      setTotalAmount(newTotalAmount);
      setItems(newItemList);
    };
  
    const decrementQuantity = (index) => {
      let newItemList = [...items];
      let newTotalAmount = totalAmount;
      if (newItemList[index].quantity > 0) {
        newItemList[index].quantity--;
        newTotalAmount -= newItemList[index].itemPrice;
      }
      setTotalAmount(newTotalAmount);
      setItems(newItemList);
    };
  
    const resetQuantity = () => {
      let newItemList = [...items]      
         newItemList.map((item) => {item.quantity = 0;});
      setItems(newItemList);
      setTotalAmount(0);
    };

    
    //function to call server:

    const getAllItemsFromServer=()=>{
        axios.get('/menu/'+location.state.RestaurantId).then(
            (response)=>{
                //sucess
                console.log(response.data);
            
                setItems(response.data)
         },
            (error)=>{
                //for error
                console.log(error);
        
            
            }
        );
    };
           
    return ( 
    <div>
      
       { items.length > 0 ? items.map((item, i) => <Item
                item={item}
                key={i}
                incrementQuantity={incrementQuantity}
                index={i}
                decrementQuantity={decrementQuantity}
                />
    )
     :(<h1>No items found</h1>)}
  
      <div>
      <Footer  totalAmount={totalAmount} newItemList={items} resetQuantity = {resetQuantity}/> 
     </div>
  </div>  
 );
}

export default AllItems;
