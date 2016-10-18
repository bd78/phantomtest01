console.log('Hello, world!...test 5');

var myAddress = 'http://www.citroen.fr/';
console.log('url =', myAddress);

var page = require('webpage').create();
t = Date.now();
console.log('Start time =', t);

var page = require('webpage').create();

function NodeListToConsoLog(myNodeList) {
    for (var index = 0; index < myNodeList.length; index++) {
        //console.log('node item =',myNodeList[index].toString());
        console.log(JSON.stringify(myNodeList[index]), undefined, 4);
        console.log(index);
    }
};


function turnObjToArray(obj) {
    return [].map.call(obj, function (element) {
        return element;
    })
};

// status de la réponse 
// success, fail
var status;

page.open(myAddress, function (status) {
    // list all the a.href links in the hello kitty etsy page
    var myTab = page.evaluate(function () {


        // function turnObjToArray(obj) {
        //     return [].map.call(obj, function (element) {
        //         return element;
        //     })
        // };


        var monNodeList = document.querySelectorAll('a');

        //console.log("nombre d'elt dans array monTableau = ", monTableau.length);
        //console.log("nombre d'elt dans node list queryNodeList = ", monNodeList.length);
        //return monTableau;
        //return turnObjToArray(document.querySelectorAll('a'));



        var monTableau = [].map.call(monNodeList, function (link) {
            return link.getAttribute('href');
        }
        );

        return monTableau;
    });


    console.log("myTab %o", myTab);
    console.log("nombre d'elt dans array myTab = ", myTab.length);


    if (status == 'success') {
        console.log('status =', status);

        var monTableauFinal = [].map.call(myTab, function (l) {
            return l.getAttribute('href');
        });

        console.log("--------------------------------------");
        console.log(monTableauFinal.join('\n'));

        t = Date.now();
        console.log('End time success =', t);
        phantom.exit(0);

    } else {
        console.log('status =', status);
        t = Date.now();
        console.log('End time fail=', t);
        phantom.exit(1);
    }

});


