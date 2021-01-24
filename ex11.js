'use strict';
var readlineSync = require('readline-sync');
var n=readlineSync.questionInt('please choose a number to check a plindrom : ');
var b=n,temp=0;

while(n>0){//121 12 1
    var a= n%10;//1 2 1
    n=parseInt(n/10);//12 1 0
    temp=temp*10+a;//(0+1) (10+2) (120+1)
}
if(temp==b){
    console.log('is a palindrome');
}
else console.log('not a palindrome');
 