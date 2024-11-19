import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [products, setProducts] = useState({});
  const [name, setName] = useState();
  const [discription, setDiscription] = useState();
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState();
  const [category, setCategory] = useState();
  const [data,setData] = useState({})
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDetails()
   
  },[])
        

  const getDetails= async ()=>{
    console.log(params)
    let response = await fetch(`http://localhost:4300/update/${params.id}`);
    response = await response.json()
    setName(response.name)
    setDiscription(response.discription)
    setCategory(response.category)
      setBrand(response.brand)
    setPrice(response.price)  }



  const updateProduct = async () => {
    let item = { name, discription, price, brand, category };
    console.log("item", item);
    let response = await fetch(`http://localhost:4300/update/${params.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json(response);
    console.log(data);
    navigate("/");
  };

  return (
    <div className="product">
      <h1>UPDATE PRODUCTS</h1>
      <input className=" input"
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
      <button  className="button" onClick={updateProduct}>UPDATE PRODUCT</button>
    </div>
  );
};

export default UpdateProduct;
