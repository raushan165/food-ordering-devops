const express = require('express');

const app = express();

app.use(express.json());

let orders = [];

app.get('/', (req, res) => {
    res.send("Order Service Running");
});

app.post('/order', (req, res) => {

    const order = {
        id: Date.now(),
        item: req.body.item
    };

    orders.push(order);

    res.json({
        message: "Order Placed",
        order
    });
});

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(3002, () => {
    console.log('Order Service running on port 3002');
});