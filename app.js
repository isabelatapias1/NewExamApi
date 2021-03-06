const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);



//Routes
app.get('/', (req, res) => {
    res.send('hola');
})
//connect to DB
mongoose.connect(
process.env.DB_CONNECTION,
{useNewUrlParser:true},
()=> console.log('connected to DB!')
);
//como escuchamos el servidor
app.listen (3000);
