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