import React, {useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

const AddItem=()=>{  

    useEffect(()=>{
        document.title = "ADD ITEMS"
    },[]);

    const [item, setItem]=useState({}); 


    //form handler function

    const handleForm=(e)=>{
        console.log(item);
        postDataToServer(item);
        e.preventDefault();
    }
   
    // creating function to post data on server
    const postDataToServer=(data)=>{
        axios.post(`/items`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("item added successfully");

        },(error)=>{
            console.log(error);
            console.log("error");
            toast.error("Error! something went wrong");

        }
    )

    };


    return (
        <div>
            <h1 className="text-center my-3">Fill Item Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="itemid">Item Id :</label>
                    <Input type="number" placeholder="Enter here" name="itemid" id="itemid" onChange={(e)=>{
                        setItem({...item,id:e.target.value})

                    }}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="name">Item Name :</label>
                    <Input type="text" placeholder="Enter name here" id="name" onChange={(e)=>{
                        setItem({...item,name:e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label htmlFor="price">Item Price :</label>
                    <Input type="number" placeholder="Enter price here" id="price" onChange={(e)=>{
                        setItem({...item,price:e.target.value})
                    }}/> 
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Item</Button>
                    <Button type="reset" onClick={()=>{
                        setItem({itemId:"",itemName:"",itemPrice:""})
                    }} color="warning ml-3" >Clear</Button>
                </Container>

            </Form>
        </div>
    )
}

export default AddItem;