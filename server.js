const express = require('express');
var path = require('path');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = express.Router();
// const PORT = 3002;
const PORT = process.env.PORT || 3002; 

app.use(cors());
app.use(bodyParser.json());  

app.get('/read', function(req, res){
    res.json({
        status:200,
        message:"my skype is live:.cid.73febdac7a6c327d"
    })
})
// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});