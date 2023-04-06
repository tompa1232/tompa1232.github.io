import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Thankyoupage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const quaryParams = new URLSearchParams(window.location.search);
    const id = quaryParams.get("id");

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products/" + id,
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));

    }, []);
  return (
    <div key={data.id} className="card">
        <h1 className='pb-10 text-lg'>
            Thank you for your order!
        </h1>
            <div><img src={data.image} alt="#" /></div>
            <div className='card-description'>
                <h6>{data.title}</h6>
                <h6>{`Price: ${data.price}`}</h6>
                <h6>{`Category: ${data.category}`}</h6>
                <div>
                </div>
            </div>
        </div>
  )
}

export default Thankyoupage