(function () {
    'use strict';
    var readlineSync = require('readline-sync');
    function sum(n1) {

        if (n1 == 0) { console.log("zero"); }
        if (n1 == 1) console.log("one");
        if (n1 == 2) console.log("two");
        if (n1 == 3) console.log("three");
        if (n1 == 4) console.log("four");
        if (n1 == 5) console.log("five");
        if (n1 == 6) console.log("six");
        if (n1 == 7) console.log("seven");
        if (n1 == 8) console.log("eight");
        if (n1 == 9) console.log("nine");

    }
    var n1 = readlineSync.question('Enter a number between 0-9: ');
    while (n1 < 0 ||  n1 > 9||isNaN(n1)) {
        var n1 = readlineSync.question('uncorrect index,enter again \nEnter a number between 0-9: ');
    }
    sum(n1);

})();0