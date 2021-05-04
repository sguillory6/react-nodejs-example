const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express(),
    bodyParser = require("body-parser");
const connectDb = require("./connection");
const User = require("./User.model");
const config = require('./config');

const { app: { port } } = config;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));
app.use(cors());

app.get('/api/users', async (req, res) => {
    console.log('api/users called!');

    const users = await User.find();
    res.json(users);
});

app.post('/api/user', async (req, res) => {
    console.log("Request: ", req);
    console.log('Request body: ', req.body);
    const user_data = req.body.user;
    console.log('Adding user:::::', user_data);
    //users.push(user);

    const user = new User(user_data);
    await user.save().then(() => console.log("User created"));
    res.json("user added");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);

    connectDb().then(() => {
        console.log("MongoDB connected");
    })
        .catch(err => {
            console.error("Database connection error");
        });
});