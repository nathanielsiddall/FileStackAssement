const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = express.Router();
const app = express();


app.use(bodyParser());
const parser = bodyParser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (request, response)=>{
    response.send('hello')
});

app.post('/', (request, response, next)=>{
    console.log("is this even");

console.log(request.body);
});

let port = 8080;
app.listen(port, ()=>{
    console.log("server started on port " + port);
});