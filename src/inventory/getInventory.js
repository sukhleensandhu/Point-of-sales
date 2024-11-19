import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const GetInventory = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:4300/GET/inventory');
    setData(response.data);
  };

  return(
    <div className='getList'>
    <h1 className=' App-header'>INVENTORY</h1>
    <Link to={"/POST/inventory"}><button className='button'>ADD INVENTORY</button></Link>
    
    <ul>
        <li>S.NO.</li>
        <li>PRODUCT ID</li>
        <li>NAME</li>
        <li>QUANTITY</li>
    </ul>
    {data.map((items,index) =>
        <ul key={items._id}>
        <li>{index+1}</li>
        <li>{items.productId}</li>
        <li>{items.name}</li>
        <li>{items.quantity}</li>
    </ul>
    
    )}
    
    
    </div>
    
    
    
    )
    }
    export default GetInventory;
    