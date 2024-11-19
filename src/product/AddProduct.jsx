import React from "react";
import { useState } from "react";
import axios from "axios"


const AddProduct =() => {
    const [name, setName] = useState();
    const [discription, setDiscription] = useState();
    const [price, setPrice] = useState();
    const [brand, setBrand] = useState();
    const [category, setCategory] = useState();

    const addProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4300/addproduct', {name,discription,price,brand,category})
        .then(result => console.log(result))
        .catch(err => console.log(err))
      };

    return(
        <div  className="product">
    <h1 className="App-header ">ADD PRODUCTS</h1>
    <input  className=" input"
        type="text"
        placeholder="Add product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className=" input"
        type="text"
        placeholder="Add product discription"
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
      />
      <input className=" input"
        type="text"
        placeholder="Add product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input className=" input"
        type="text"
        placeholder="Add product category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input className=" input"
        type="text"
        placeholder="Add product brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <button className=" button" onClick={addProduct}>ADD PRODUCT</button>

    </div>
)}

export default AddProduct