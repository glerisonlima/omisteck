const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb+srv://mongosa:masterkey@cluster0-pmsoi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

app.use(require('./routes'))

app.listen(3000);
