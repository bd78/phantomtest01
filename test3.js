console.log('Hello, world!...test 3');

var myAddress = 'http://www.renault.fr';

var page = require('webpage').create();

t = Date.now();

var page = require('webpage').create();


page.open(myAddress, function(status) {
    // list all the a.href links in the hello kitty etsy page
    var links = page.evaluate(function() {
        var monTableau = [];
        return monTableau.map.call(document.querySelectorAll('a'), function(link) {
            return link.getAttribute('href');
        });
    });
    console.log(links.join('\n'));
    phantom.exit();
});

