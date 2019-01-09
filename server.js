const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://parkjs:plug11041998@ds016098.mlab.com:16098/serverwk1');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const CoinRouter = require('./routes/CoinRouter');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
 });

app.use('/coins', CoinRouter);

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});

