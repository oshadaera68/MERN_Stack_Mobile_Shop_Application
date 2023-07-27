const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 4001

const url = 'mongodb://127.0.0.1:27017/mobileshop'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const item = require('./Routes/item')
const signIn = require('./Routes/signin')
const signUp = require('./Routes/signup')

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'Connection error:'));
dbConnection.once('open', () => {
    console.log('Connected to MongoDB!');
});

app.use(express.json())
app.use("/item", item)
app.use("/signin", signIn)
app.use("/signup", signUp)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

