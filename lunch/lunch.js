// going to lunch
var haveMoney=true;
var fastFood=false;
var homeMade="no";
var type="burger";
var restaurant="deli";

haveMoney = true;
fastFood = false;
homeMade = "no";
type = "burger";
restaurant = "deli"

if(haveMoney){
    if(fastFood){
        if(type === "burger"){
        console.log("5 Guys");
    } else if(type === "wings"){
        console.log("A-Town");
    } else if(type === "salad"){
        console.log("TopDawg");
}
}
} else if (homeMade === "yes"){
    console.log("go home");
} else if(homeMade == "don't like it"){
    console.log("ask a friend");
} else {
    console.log("starve");
}
