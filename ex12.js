'use strict';
var readlineSync = require('readline-sync');
var n=readlineSync.question('please enter a string : ');
var s='';
for (let i =  0;i<n.length ;i++) {
    if(n.charCodeAt(i)==97||n.charCodeAt(i)==101||n.charCodeAt(i)==105||n.charCodeAt(i)==111||n.charCodeAt(i)==117||n.charCodeAt(i)==121){
        s+=n.charAt(i).toUpperCase();
    }
    else{
        s+=n.charAt(i);
    }
}
console.log(s);

