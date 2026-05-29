const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/foodapp')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.send('User Service Running');
});

app.post('/register', async (req, res) => {

    const user = new User({
        name: req.body.name,
        email: req.body.email
    });

    await user.save();

    res.json({
        message: 'User Registered',
        user
    });
});

app.get('/users', async (req, res) => {

    const users = await User.find();

    res.json(users);
});

app.listen(3000, () => {
    console.log('User Service running on port 3000');
});