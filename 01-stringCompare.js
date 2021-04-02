var order1 = ["data", "security", "device", "AI", "IT", "Authentication", "system", "JavaScript", "language", "software"];
var order2 = ["IT", "Authentication", "AI", "system", "JavaScript", "language", "software", "device", "data", "security"];
var random1 = Math.floor(Math.random() * order1.length);
var random2 = Math.floor(Math.random() * order2.length);

console.log("1", random1);
console.log("2", random2);
console.log(order1[random1]);
console.log(order2[random2]);

function compareString() {
  if (order1[random1] == order2[random2]) {
    alert("Aha you got the same word! It is" + " " + order1[random1] + ".");
  } else {
    alert("Ummm the two words did not match. Try again.")
  }
}

compareString();
