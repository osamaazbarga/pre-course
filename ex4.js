'use strict';
var readlineSync = require('readline-sync');
var num=readlineSync.questionInt('How many people are you going with?');

if (readlineSync.keyInYN('Should it be Kosher? (y/n)')) {
    var leme = readlineSync.keyInYN('should it be Kashrut Lemehadrin ? y / n');
}

var foods = ["homos", "meat", "vegetarian", "flafel"];

var foodname = readlineSync.keyInSelect(foods, "Choose a food: ");

var rest = ["nafes", "agader", "black", "24 meat"];

var restfav = readlineSync.keyInSelect(rest, "this is my favorate restorant\n,Choose a restorant: ");



console.log('Working!');
