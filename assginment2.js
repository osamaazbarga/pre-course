'use strict';
function checkbet(b)
{
    if((b<1||b>50)){
       return false;
    }
    return true;
}
function changeplayer(ff){
    if(ff==1) return 0;
    return 1;
}
console.log('//////////---------- Welcome To War ----------\\\\\\\\\\\\\\\\\\\\');
var suits=['♠︎', '♥︎', '♣︎','♦︎'];
var rs=require('readline-sync');
var plamount=[50,50];
var bet=[0,0];
var flag=0;
var ff=0;

var winlose='';

var pick=['1 Player','2 Player'];
var ind=rs.keyInSelect(pick,'What would you like to do?',{cancel: false});

var name1=rs.question('please enter the first player your name: ');
console.log('Hello '+name1+' you have 50 ₪');
if(ind===1){
    var name2=rs.question('please enter the second player name: ');
    console.log('Hello '+name2+' you have 50 ₪');
    ff=Math.floor(Math.random()*2);//how is started
}
else name2='comp';
var name=[name1,name2];


while(true){
    bet[0]=rs.questionInt(name[0]+' Please enter your bet for the next round:1 to 50 ');
    bet[1]=bet[0];
    if(ind===1)
    {
        bet[1]=rs.questionInt(name[1]+' Please enter your bet for the next round:1 to 50 ');
        if(checkbet(bet[1])===false){
            console.log(name[1]+'is a liar');
            console.log('i said between 1 to 50 and you typed:'+bet[1]+'!!!!!\ni dont play with liars bye');
            process.exit(1)
        }
        else if(bet[1]>plamount[1]){
            console.log('you dont have this money bye');
            break;
        }
    
    }



    if(checkbet(bet[0])===false){
        console.log(name[0]+'is a liar');
        console.log('i said between 1 to 50 and you typed:'+bet[0]+'!!!!!\ni dont play with liars bye');
        process.exit(1)
    }
    else if(bet[0]>plamount[0]){
        console.log('you dont have this money bye');
        break;
    }
   
    

    if(ind==1){
        console.log('\n'+name[ff]+' turn\n');
    }

    var user1=Math.floor(Math.random()*12+1);//name1
    var user2=Math.floor(Math.random()*12+1);//name2 OR COMP
    var s1=Math.floor(Math.random()*4);
    var s2=Math.floor(Math.random()*4);


    while(user1===user2)
    {
        user1=Math.floor(Math.random()*12+1);
        user2=Math.floor(Math.random()*12+1);
    }

    if(user1>user2){
        plamount[0]+=bet[1];
        plamount[1]-=bet[0];
        if(ff==0){
            var winlose=(name[ff]+' you won '+bet[1]+'!! And now you have '+plamount[ff]);
        }
        else var winlose=(name[ff]+' you lost '+bet[0]+'!! And now you have '+plamount[ff]);
    }
    else{
        plamount[1]+=bet[0];
        plamount[0]-=bet[1];
        if(ff==1){
            var winlose=(name[ff]+' you won '+bet[0]+' !! And now you have '+plamount[ff]);
        }
        else var winlose=(name[ff]+' you lost '+bet[1]+' !! And now you have '+plamount[ff]);

    }
    if(plamount[ff]<=0){
        console.log('You are broke...Bye Bye');
        break;
    }
    if (ind==0){
        if(plamount[1]<=0){
            console.log(name[1]+'broke...Bye Bye');
        }
    }


    console.log(name[0]+' card is '+user1,suits[s1]+' and '+name[1]+ ' card is '+user2,suits[s2],winlose);








    var op=['Play another round','Leave with my money:-)'];
    var indx=rs.keyInSelect(op,'What would you like to do?',{cancel: false});
    if(indx===1){
        console.log(name[0]+' you have '+plamount[0],name[1]+' you have '+plamount[1]+' bye');


        break;
    }
    if(ind == 1)
        ff=changeplayer(ff);
    
    

}