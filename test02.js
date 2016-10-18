
var myAddress = 'http://www.renault.fr';
console.log('Hello, world!' + myAddress);

var page = require('webpage').create();

t = Date.now();

page.onResourceRequested = function(request,networkrequest) {
  console.log('Request : '+ request.url);
};



page.open( myAddress , function(status) {
    console.log("Status: " + status);
    if(status === "success") {
        t = Date.now() - t;
        console.log('Loading ' + myAddress);
        console.log('Loading time ' + t + ' msec');
    } else
    { 
        console.log('FAIL to load the address');
    }
  
    phantom.exit();
    
});