import React from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


const CreateInvoice =() => {
  const [checkoutId, setCheckoutId] = useState();
  const [invoiceNumber, setInvoiceNumber] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [invoiceDate, setInvoiceDate] = useState();
  const [tax, setTax] = useState();
  const [discount, setDiscount] = useState();

  const addProduct = (e) => {
      e.preventDefault();
      axios.post('http://localhost:4300/POST/invoice', {checkoutId,invoiceNumber,invoiceDate,totalAmount,tax,discount})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    };

  return(
      <div  className="product">
  <h1 className="App-header ">CREATE INVOICE</h1>
  <input  className=" input"
      type="text"
      placeholder="Add quantity"
      value={checkoutId}
      onChange={(e) => setCheckoutId(e.target.value)}
    />
    <input className=" input"
      type="text"
      placeholder="Add price"
      value={invoiceNumber}
      onChange={(e) => setInvoiceNumber(e.target.value)}
    />
    <input className=" input"
       type="date" id="start" name="trip-start" value={invoiceDate} onChange={(e)=>setInvoiceDate(e.target.value)}

    />
    <input className=" input"
      type="text"
      placeholder="Add total amount"
      value={totalAmount}
      onChange={(e) => setTotalAmount(e.target.value)}
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
  <div><button className=" button" onClick={addProduct}>CREATE INVOICE</button></div>
   <div><Link to={"/GET/invoice"}><button className='Linkbutton'>GET INVOICE DETAILS</button></Link></div>
  </div>
)}

export default CreateInvoice