//
// Homework 1-29-2020
//
console.log("// Homework 1-29-2020");
var num1;
num1=13;
console.log("Rated PG-" +num1);
console.log(2 + true);

//
// Homework 1-30-2020
//
console.log("");
console.log("// Homework 1-30-2020");

        // Exercise Conditional - Step 1

var count=2;
var answer=2*(count+5);
console.log(answer);
// console.log(2*(count+5)); also works

// modulo of 14/3 should return 2
var answerMod3=(2*(count+5)%3);
console.log(answerMod3); // console.log(2*(count+5)%3); also works

// modulo of 14/2 should return 0
var answerMod2=(2*(count+5)%2);
console.log(answerMod2); // console.log(2*(count+5)%2); also works
// Expected result of 0 achieved


        // Exercise Conditional - Steps 2-3

if(answerMod2==0){
    console.log("modulus 2 returns 0 is "+true);
} else {
    console.log("modulus 2 returns 0 is "+false);
}

        // Exercise Conditional - Steps 4-5

// Change any number in the following 3 variables to affect results
// Change all numbers in the following 3 variables to affect results
var eighth=12.5;
var quarter=25;
var half=50;

if(eighth*8===100){
    console.log("12.5 * 8 = 100");
} else {
    console.log("Does NOT equal 100");
}
if(quarter*4===100){
    console.log("25 * 4 = 100");
} else {
    console.log("Does NOT equal 100");
}
if(half*2===100){
    console.log("50 * 2 = 100");
} else {
    console.log("Does NOT equal 100");
}
if(eighth*8===100 && quarter*4===100 && half*2===100){
    console.log("The three conditions EACH equal 100");
} else if(eighth*8===100 || quarter*4===100 || half*2===100){
    console.log("At least one condition equals 100");
} else {
    console.log("At least one condition does NOT equal 100");
}

// Exercise Loop - Steps 1-2

var c=1;

for(c;c<51;c++){
    console.log(c);
}

        // Exercise Loop - Step 3

var i=0

while(i<=50){
    if(i%2===0){
        console.log(i);
    }
    i+=1
}

        // Exercise Loop - Step 4

// MORGAN: I came up with this code on my own, but have shared it with a
// couple of people in the class. So please don't think that I copied it :)

var c=1;

for(c;c<101;c++){
    if(c%3===0 && c%5===0){
        console.log(c+" fizzbuzz");
    } else if(c%3===0){
        console.log(c+" fizz");
    }   else if(c%5===0){
    console.log(c+" buzz");
} else console.log(c);
}

        // Exercise Function - Steps 1-3

function addBoth(add1,add2){
    var addTotal;
    addTotal=(add1+add2);
    return addTotal;
    }
    console.log(addBoth(3000,5008));


function areaRect(len,wid){
    var area;
    area=(len*wid);
    return area;
    }
    console.log(areaRect(10,5));


var height=10

function volumeRect(len,wid,height){
    var volume;
    volume=(len*wid*height);
    return volume;
    }
    console.log(volumeRect(10,5,height));


        // Exercise Function - Step 4

function loopParam(cStart,cEnd){
    for(var i=cStart;i<=cEnd;i++){
        console.log(i);
    }
}
loopParam(1,25);


        // Exercise Function - Step 5

(function () {
var iife="IIFE";
console.log(iife);
})();

//
// Homework 1-30-2020
//
console.log("");
console.log("// Homework 1-31-2020");

        // Exercise Math

var rand=Math.floor(Math.random()*5); // generates 0-4
console.log("random number = " + rand);
function randomCheck(){
        var x=document.getElementById('userInput').value; // returns data from input field
        console.log("Guessed number = " + x);
        if(x==rand){
        console.log("You Guessed it!");
        } else{
        console.log("Guess again.");
}
}