const express = require('express');

const app = express();

const menu = [

    {
        id: 1,
        item: "Burger",
        price: 120
    },

    {
        id: 2,
        item: "Pizza",
        price: 250
    },

    {
        id: 3,
        item: "Pasta",
        price: 180
    }
];

app.get('/', (req, res) => {
    res.send("Menu Service Running");
});

app.get('/menu', (req, res) => {
    res.json(menu);
});

app.listen(3001, () => {
    console.log('Menu Service running on port 3001');
});