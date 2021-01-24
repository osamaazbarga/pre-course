'use strict';
var sum=1;
var readlineSync = require('readline-sync');
var num=readlineSync.questionInt('please choose a positive number : ');
for(var i=1;i<=num;i++){
    sum*=i;
}
console.log(sum);