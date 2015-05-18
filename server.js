
var express = require("express");
var bestSellers = require('./bestSellers');
var app = express();
app.listen(8080);
console.log("listening on port 8080......waiting for requests");

var books = bestSellers.getAllBestSellersBooks();// Return a Json object with all of the best seller books

// Displaying all the best seller books on the client site
app.get('/',function(req,res){
    res.status(200);
    res.json(books);
    console.log('---- Response done? ' + res.finished);
    console.log('\n---- Header sent: ' + res._header);
});

//GET for specific book, by name
app.get('/name/:bookid',function(req,res){
    console.log('Showing result for book ID: ' + req.params.bookid + '\n');
});

app.param('bookid',function(req,res,next,value){
    var  bookId = bestSellers.getBookName(value);
    console.log(bookId);
    res.json(bookId);
    next();
});

//GET for Json object of specific books by month
app.get('/BSForMonth/:bookmonth',function(req,res){
    console.log('Showing result for best seller books by month: ' + req.params.bookmonth + '\n');
});

app.param('bookmonth',function(req,res,next,value){
    var  BSForMonth = bestSellers.getBSForMonth(value);
    console.log(BSForMonth);
    res.json(BSForMonth);
    next();
});

