'use strict';

for(var i=1;i<=100;i++){
    if(i%7==0||i%10==7 ||(i-(i%10))/10==7){
       console.log('BOOM,');
    }
    else {
        console.log(i+',');
    }
}