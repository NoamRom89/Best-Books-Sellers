/*******       Main Module      *******/

//JSON object that contain best seller books
var BSArray = [
    {"Name" : "Ronaldo","year" : "1989","BSMonth" : 'March'},
    {"Name" : "Messi","year" : "2005","BSMonth" : 'May'},
    {"Name" : "Gerrard","year" : "2010","BSMonth" : 'June'},
    {"Name" : "Zidan","year" : "2011","BSMonth" : 'June'},
    {"Name" : "Cafu","year" : "2012","BSMonth" : 'September'},
    {"Name" : "Xavi","year" : "2013","BSMonth" : 'July'},
    {"Name" : "Pep","year" : "2015","BSMonth" : 'January'}
];

//Returning all the best seller books
exports.getAllBestSellersBooks = function(){
    return BSArray;
};


//Returning only 1 best seller book by specific name(id)
exports.getBookName = function(id){
   for(var i = 0; i < BSArray.length; i++){
        if(BSArray[i].Name == id){
            return BSArray[i];
        }
   }
};

//Returning an array of all best seller books by specific month
exports.getBSForMonth = function(month){
  var newJson = {'BestSellerForMonth':[]};
    for(var i = 0; i < BSArray.length; i++){
        if(BSArray[i].BSMonth == month){
            newJson.BestSellerForMonth.push(BSArray[i]);
        }
    }
    return newJson;
};


