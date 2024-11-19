import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [data, setData] = useState({
        totalProducts: 0,
        lowStockItems: [],
        recentSales: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4300/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='dashboard'>
            <div className='home'>
                <ul>
           <li> <Link to={"/products"}>PRODUCTS</Link></li>
           <li> <Link to={"/POST/invoice"}>INVOICE</Link></li>
           <li> <Link to={"/GET/inventory"}>INVENTORY</Link></li>
            <li><Link to={"/POST/checkout"}>CHECKOUT</Link></li></ul></div>
        <div className="App">
            <header className="header">
                <h1>DOUBLE SQUARE</h1>
            </header>
            
            <main>
            <section>
                    <h2>QUICK STATS</h2>
                    <div>
                        <p><strong>Total Products:</strong> {data.totalProducts}</p>
                        <p><strong>Low Stock Items:</strong> {data.lowStockItems.length}</p>
                    </div>
                </section>
                <section>
                    <h2>LOW STOCK ITEMS</h2>
                    <ul>
                        {data.lowStockItems.map((item, index) => (
                            <li key={index}>{item.name} (Stock: {item.quantity})</li>
                        ))}
                    </ul>
                </section>
                <section>
                    <h2>RECENT SALES</h2>
                    <ul>
                        {data.recentSales.map((sale, index) => (
                            <li key={index}>
                                {sale.name} - ${sale.totalAmount} on {new Date(sale.invoiceDate).toLocaleDateString()                            }
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
        <div className='login'><Link to={'/login'}>LOGIN</Link></div>
        
        
        </div>
    );
}

export default Dashboard;
