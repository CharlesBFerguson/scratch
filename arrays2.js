let customerOrder = "Burger:3, nuggets:1, Shake:4"; // String
customerOrder = customerOrder.toLowerCase(); // String
customerOrder = customerOrder.split(','); //now Array - can chain .split above instead
customerOrder = customerOrder.join(''); // now String
customerOrder = customerOrder.split(' '); //now Array
console.log(typeof customerOrder, customerOrder);

customerOrder = customerOrder.join(':'); // now String
customerOrder = customerOrder.split(':'); //now Array
console.log(typeof customerOrder, customerOrder);

// let menu = {
//   burger:100,
//   cheeseburger:100,
//   hotdog:100,
//   nuggets:1000,
//   fries:100,
//   tots:100,
//   shake:100,
//   soda:100,
//   water:100
// }
// // console.log(typeof menu, menu);

// OR: (Which format best to use?)

// let menu2 = [
//   {'item':'burger', 'stock':100},
//   {'item':'cheeseburger', 'stock':100},
//   {'item':'hotdog', 'stock':100},
//   {'item':'nuggets', 'stock':1000},
//   {'item':'fries', 'stock':100},
//   {'item':'tots', 'stock':100},
//   {'item':'shake', 'stock':100},
//   {'item':'soda', 'stock':100},
//   {'item':'water', 'stock':100}
// ]
// // console.log(typeof menu2, menu2);


function pushData() {
  // get value from the input text
  var inputText = document.getElementById('inputText').value;
  
  // append data to the array
  customerOrder.push(inputText);
  
  var pval = "";
  
  for(i = 0; i < customerOrder.length; i++)
  {
    pval = pval + customerOrder[i] + "<br>";
  }
  
  // display array data
  console.log(customerOrder);
  document.getElementById('pText').innerHTML = pval;
}