'use strict';
var readlineSync = require('readline-sync');
var n=readlineSync.questionInt('please choose the last number to check prime : ');
for(var i=2;i<=n;i++){

    var Prime = 1;
    for(var j=2; j<=i/2; j++){
        if(i%j==0){
            Prime = 0;
            break;
        }
    }
    if(Prime==1){
        console.log(i+',')
    }
}