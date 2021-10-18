const express = require("express");
const app = express();

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

app.listen(3000, () => console.log("The simple shopping app is listening on PORT 3000!"));
