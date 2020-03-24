    // Exercise function
    // 1. create a function that takes two arguments and adds them together.
    // 2. create a function that takes two arguments and multiplies them together.
    // 3. create a function that takes two arguments where the first argument is the start number
    //    and the second argument is the end number. The body of the function starts a loop and
    //    ends it at the second argument and logs every number between the start and end number.
    // 4. create a variable in the global scope:
    //      - create a function that takes an argument
    //      - add the argument to the global variable
    //      - log the return of that function
    // 5. create an IIFE that logs your success of creating an IIFE.

function addBoth(add1,add2){
    var addTotal=(add1+add2);
    return addTotal;
    }
    console.log(addBoth(45,55));


function areaRect(len,wid){
    var area=(len*wid);
    return area;
    }
    console.log(areaRect(10,5));


var height=10

function volumeRect(len,wid,height){
    var volume=(len*wid*height);
    return volume;
    }
    console.log(volumeRect(10,5,height));


(function () {
    var iife="IIFE";
    console.log(iife);
})();


/*
<input id='len'></input>
<input id='wid'></input>
<p id='area'></p>
*/


let len = document.getElementById('len').value;
let wid = document.getElementById('wid').value;
let area = document.getElementById('area');

let result = areaRect(len, wid);
area.innerHTML = result;