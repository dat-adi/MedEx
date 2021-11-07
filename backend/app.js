const express = require("express");
const app = express();

app.use(express.json());

// Set up testing routes
app.get('/', function(req, res){
    return res.json({
        message: "This is supposed to be a GET request, I think?",
        success: true
    })
});

app.post('/', function(req, res){
    return res.json({
        message: "This is supposed to be a POST request, I think?",
        success: true
    })
});

module.exports = app;
