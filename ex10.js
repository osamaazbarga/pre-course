'use strict';
var readlineSync = require('readline-sync');
var n=readlineSync.question('please enter a string : ');
for(var i=0;i<n.length;i++){
    n=n.replace(" ","*");
}
console.log(n);