console.log('Hello, world!...test 2');

var myAddress = 'http://www.renault.fr';

var page = require('webpage').create();

t = Date.now();

page.onResourceRequested = function(request) {
    //console.log('Request : '+ request.url)
    //console.log('Request ' + JSON.stringify(request, undefined, 4));
};

page.onResourceReceived = function(response) {
    //console.log('Response : '+ response.url)
    //console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

page.onNavigationRequested = function(url, type, willNavigate, main) {
    console.log('Trying to navigate to: ' + url);
    console.log('Caused by: ' + type);
    console.log('Will actually navigate: ' + willNavigate);
    console.log('Sent from the page\'s main frame: ' + main);
}

page.open( myAddress , function(status) {
/*
      page.includeJs("/Users/bruno/Projects/phantomjstest01/jquery.min.js", function() {
        console.log('HREF =========== '+page.evaluate(function() {
            return $('a')
                .map(function() {
                    return this.href;})
                .get()
                .join();
        }));}
  
  */
  
  
         page.includeJs("//Users/bruno/Projects/phantomjstest01/jquery.min.js", function() {
        console.log('HREF =========== ');
      phantom.exit();
});

    
    
    var url = page.url;
    console.log('URL: ' + url);
    console.log("Status: " + status);
   
   console.log("hhkjhkhkhkhkj");
   
   
    
    if(status === "success") {
        t = Date.now() - t;
        console.log('Loading ' + myAddress);
        console.log('Loading time ' + t + ' msec');  
        //page.render('example.png');
        
        //console.log(page.content);
        
        
        console.log('childFramesCount '+ page.childFramesCount());
       // cossole.log('childFramesName ' + page.childFramesName());
   
   
    } else
    { 
        console.log('FAIL to load the address');
    }
  
    phantom.exit();
    
});



