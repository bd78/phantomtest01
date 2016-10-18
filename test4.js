console.log('Hello, world!...test 4');

var myAddress = 'http://www.citroen.fr';

var page = require('webpage').create();

t = Date.now();

var page = require('webpage').create();

page.open(myAddress, function(status) {
    // list all the a.href links in the hello kitty etsy page
    var links = page.evaluate(function() {
    var monTableau = [];
    var queryNodeList = document.querySelectorAll('a');
    console.log("nombre de  a : ", queryNodeList.length) ;
    
        
        
//     monTableau=Array.prototype.map.call(queryNodeList, function(link) {
           
  //          return link;
   //     });
        
   //     return monTableau;
    });
    console.log(links.join('\n'));

});
