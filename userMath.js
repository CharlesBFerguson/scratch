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