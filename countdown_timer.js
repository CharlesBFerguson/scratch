//  Exercise countdown
//  - create a countdown timer
//  - countdown from a number to 0
//  - it needs to be visible counts


var deadline = new Date("2 24 2020 19:30:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("counter").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
  if (t < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);

