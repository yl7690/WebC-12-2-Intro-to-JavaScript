var myOutcome = Math.floor(Math.random() * 6);
var yourOutcome = Math.floor(Math.random() * 6);

console.log("mine", myOutcome);
console.log("yours", yourOutcome);

function numberCompare() {
  if (myOutcome > yourOutcome) {
    alert("Aha! The computuer won.");
  } else if (myOutcome === yourOutcome) {
    alert("Okay. It's a tie. You two both got "  + myOutcome +".");
  } else {
    alert("Wow! You won! Congrats.");
  }
}

numberCompare();
