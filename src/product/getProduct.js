import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateProduct from './updateProduct';


const GetProducts = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:4300/products');
    setProducts(response.data);
  };


  const deleteProduct =async (id) => {
let result = await fetch(`http://localhost:4300/${id}`,{
      method:"Delete"
    })
    result = await result.json()
     if(result)
     {
      fetchProducts()
     }
        };


  
  
return(
<div className='getList'>
<h1 className=' App-header'>PRODUCT LIST</h1>
<Link to={"/addproduct"}><button className='button'>ADD PRODUCT</button></Link>
<ul>
    <li>S.NO.</li>
    <li>NAME</li>
    <li>DISCRIPTION</li>
    <li>PRICE</li>
    <li>CATEGORY</li>
    <li>BRAND</li>
    <li>OPERATIONS</li>
</ul>
{products.map((items,index) =>
    <ul key={items._id}>
    <li>{index+1}</li>
    <li>{items.name}</li>
    <li>{items.discription}</li>
    <li>{items.price}</li>
    <li>{items.category}</li>
    <li>{items.brand}</li>
    <li>
        <Link to={"/update/"+items._id}><button>UPDATE</button></Link>/
        <button onClick={() => deleteProduct(items._id)}>DELETE</button>
    </li>
</ul>

)}


</div>



)
}
export default GetProducts;
