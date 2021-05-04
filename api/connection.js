// connection.js
const mongoose = require("mongoose");
const config = require("./config");

const { db: { host, port, database, username, password, extra_args } } = config;

let auth;
if (username.length === 0 || password.length === 0) {
    auth = '';
}
else {
    auth = `${username}:${password}@`
}

const connection = `mongodb://${auth}${host}:${port}/${database}`;
console.log(connection);

const connectDb = () => {
    return mongoose.connect(connection);
};

module.exports = connectDb;