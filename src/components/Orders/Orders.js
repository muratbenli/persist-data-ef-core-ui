import React, { useEffect } from 'react';
const axios = require('axios').default;

const Order = () => {

    useEffect(() => {
        axios.get("/orders").then((res) => {
            console.log(res);
        });
    })

    return (
        <div>Order</div>
    );
}

export default Order;