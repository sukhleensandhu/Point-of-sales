import React from "react";
import { useState } from "react";
import axios from "axios"


const CreateInventory =() => {
  const [quantity, setQuantity] = useState();
  const [name,setName] = useState();
  const [productId,setProductId] = useState();

  const addProduct = (e) => {
      e.preventDefault();
      axios.post('http://localhost:4300/POST/inventory', {quantity,productId,name})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    };

  return(
      <div  className="product">
  <h1 className="App-header ">INVENTORY</h1>
  <input className=" input"
      type="text"
      placeholder="Add product id"
      value={productId}
      onChange={(e) => setProductId(e.target.value)}
    />
    <input className=" input"
      type="text"
      placeholder="Add name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    
  <input  className=" input"
      type="text"
      placeholder="Add quantity"
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
    />
    
    <button className=" button" onClick={addProduct}>ADD INVENTORY</button>

  </div>
)}

export default CreateInventory