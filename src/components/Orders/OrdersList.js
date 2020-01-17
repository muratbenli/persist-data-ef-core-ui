import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
const axios = require('axios').default;

const OrdersList = () => {

    const [name, setName] = useState("");
    const [orders, setOrders] = useState(null);


    const getOrders = () => {
        axios.get('/orders').then((res) => {
           
            setOrders(res.data);
           
        }, []);
    }

    useEffect(() => {
        getOrders();
    })

    const onClick = () => {
        if(name.trim() !== ""){
            axios.post("/orders", {
                CustomerId: 2,
                ProductOrder: [{
                    ProductId: 1,
                    Quantity: 3
                }]
            }).then((res) => {
                const orders = orders;
                orders.push(res.data);
                setOrders(orders);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    if(orders == null) return 'Loading';

    return(
        <React.Fragment>
            <br />
            <InputGroup>
                <InputGroupAddon addonType="prepend"><Button onClick={() => onClick()}>Gönder</Button></InputGroupAddon>
                <Input onChange={(e) => onChange(e)}/>
            </InputGroup>
            <br />
            <ListGroup>
                <ListGroupItem active>Orders</ListGroupItem>
                    { orders.map(element => {
                    return <ListGroupItem key={element.orderId}>{element.orderLineItems.length !== 0 ? element.orderLineItems[0].productName : "farklı"}</ListGroupItem>
             
                     })}
            </ListGroup>   
        </React.Fragment>

    )
}


export default OrdersList;