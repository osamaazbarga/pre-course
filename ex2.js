(function () {
    'use strict';
    function sum(n1, n2) {
        console.log(isNaN(parseFloat(n1)));
        if (isNaN(n1)||isNaN(n2)) {
            console.log(isNaN(n1));
            //console.log("make 10");
            console.log("noop");
        }
        else{ if(n1+n2==10)
            console.log("make 10");
            else console.log("noop");
        }
    }
    var readlineSync = require('readline-sync');
    var n1 = readlineSync.question('Enter a first number: ');
    var n2 = readlineSync.question('Enter a second number: ');
    /*while(isNaN(n1)||isNaN(n2)){
        console.log('uncorrect index ,please try again');
        var n1 = readlineSync.question('Enter a first number: ');
        var n2 = readlineSync.question('Enter a second number: ');
    }
    */

    sum(n1,n2);

})();