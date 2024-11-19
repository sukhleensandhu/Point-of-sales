import React from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


const CreateCheckout =() => {
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const [tax, setTax] = useState();
  const [discount, setDiscount] = useState();

  const addProduct = (e) => {
      e.preventDefault();
      axios.post('http://localhost:4300/POST/checkout', {quantity,price,totalAmount,paymentStatus,tax,discount})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    };

  return(
    <div>
      <div  className="product">
  <h1 className="App-header ">CREATE CHECKOUT</h1>
  <input  className=" input"
      type="text"
      placeholder="Add quantity"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
    />
    <input className=" input"
      type="text"
      placeholder="Add price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
    <input className=" input"
      type="text"
      placeholder="Add total amount"
      value={totalAmount}
      onChange={(e) => setTotalAmount(e.target.value)}
    />
    <input className=" input"
      type="text"
      placeholder="Add payment status"
      value={paymentStatus}
      onChange={(e) => setPaymentStatus(e.target.value)}
    />
    <input className=" input"
      type="text"
      placeholder="Add tax"
      value={tax}
      onChange={(e) => setTax(e.target.value)}
    />
    <input className=" input"
      type="text"
      placeholder="Add discount"
      value={discount}
      onChange={(e) => setDiscount(e.target.value)}
    />
    <div><button className=" button" onClick={addProduct}>CREATE CHECKOUT</button></div>
   <div><Link to={"/GET/checkout"}><button className='Linkbutton'>GET CHECKOUT DETAILS</button></Link></div>
  </div>
    
  </div>

)}

export default CreateCheckout