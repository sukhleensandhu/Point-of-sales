import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetCheckoutData = () => {
    const [details, setDetails] = useState([]);
  
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:4300/GET/checkout');
      setDetails(response.data);
    };
    return(
        <div className='getList'>
        <h1 className=' App-header'>PRODUCT LIST</h1>
        
        <ul>
            <li>S.NO.</li>
            <li>QUANTITY</li>
            <li>PRICE</li>
            <li>TOTAL AMOUNT</li>
            <li>PAYMENT STATUS</li>
            <li>TAX</li>
            <li>DISCOUNT</li>
        </ul>
        {details.map((items,index) =>
            <ul key={items._id}>
            <li>{index+1}</li>
            <li>{items.quantity}</li>
            <li>{items.price}</li>
            <li>{items.totalAmount}</li>
            <li>{items.paymentStatus}</li>
            <li>{items.tax}</li>
            <li>{items.discount}</li>
        </ul>
        
        )}
        
        
        </div>
        
        
        
        )
        }
        export default GetCheckoutData;
        








