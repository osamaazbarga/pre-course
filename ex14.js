function maxmin(num){

    var arr=[];
    for(var i=0;i<num;i++)
        arr.push(Math.floor(Math.random()*50+1));   
    console.log(arr);   
    console.log('max number= '+Math.max.apply(null,arr));  
    console.log('min number= '+Math.min.apply(null,arr));   
}
'use strict';

var rs=require('readline-sync');
var num=rs.questionInt('enter number: ');
maxmin(num);
