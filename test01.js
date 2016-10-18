console.log('Hello, world!');

var myAddress = 'http://www.citroen.fr';

var page = require('webpage').create();

t = Date.now();

page.onResourceRequested = function (request) {
    console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function (response) {
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
};


page.open(myAddress, function (status) {
    console.log("Status: " + status);
    if (status === "success") {
        t = Date.now() - t;
        console.log('Loading ' + myAddress);
        console.log('Loading time ' + t + ' msec');
        page.render('example.png');
        console.log(JSON.stringify(page, undifined, 4));
    } else {
        console.log('FAIL to load the address');
    }

    phantom.exit();

});



