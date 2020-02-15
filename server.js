var express = require('express');
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.set('view engine','ejs');

app.use("/public",express.static(__dirname + '/public'));
app.use("/views",express.static(__dirname + '/views'));

var url = `https://dog.ceo/api/breeds/list/all`;

var listBreeds = []

app.get('/',function(req,res){
    request(url,function(error,response,body){
        breeds =JSON.parse(body).message;
        for(var key in breeds){
            listBreeds.push(key)
        }
        res.redirect('/1');
    })
    
});

app.get('/:page',function(req,res){
    var page = parseInt(req.params.page) || 1
    var urlImage = "https://dog.ceo/api/breed/"+listBreeds[page]+"/images/random";
    request(urlImage,function(error,response,body){
        var image = JSON.parse(body).message;
        console.log(image);
        res.render('index',{
            image: image,
            breed:listBreeds[page], 
            pages:listBreeds.length,
            current:page,
            listBreeds:listBreeds
            });
    });
    
})
// app.get('/:page', function(req, res, next) {
//     var perPage = 9;
//     var page = req.params.page || 1;
//     res.render('dogs', {
//         dog: listBreeds[parseInt(page)],
//         current: page,
//         pages: listBreeds.length
//     });
// })

app.listen(8000);