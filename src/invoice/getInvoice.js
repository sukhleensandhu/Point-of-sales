import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetInvoice = () => {
    const [details, setDetails] = useState([]);
  
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:4300/GET/invoice');
      setDetails(response.data);
    };
    return(
        <div className='getList'>
        <h1 className=' App-header'>INVOICE</h1>
        
        <ul>
            <li>S.NO.</li>
            <li>CHECKOUT ID</li>
            <li>INVOICE NUMBER</li>
            <li>INVOICE DATE</li>
            <li>TOTAL AMOUNT</li>
            <li>TAX</li>
            <li>DISCOUNT</li>
        </ul>
        {details.map((items,index) =>
            <ul key={items._id}>
            <li>{index+1}</li>
            <li>{items.checkoutId}</li>
            <li>{items.invoiceNumber}</li>
            <li>{items.invoiceDate}</li>
            <li>{items.totalAmount}</li>
            <li>{items.tax}</li>
            <li>{items.discount}</li>
        </ul>
        
        )}
        
        
        </div>
        
        
        
        )
        }
        export default GetInvoice;
        








