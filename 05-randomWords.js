var nameCollection = ["Robert", "Frankie", "Brian", "Eric", "Justin", "Ricky", "Michael", "Max"];
var verbCollection = ["sucks at", "is good at"];
var posCollection = ["top", "mid", "jungle", "ADC", "support"];
var randomName = nameCollection[Math.floor(Math.random() * nameCollection.length)];
var randomVerb = verbCollection[Math.floor(Math.random() * verbCollection.length)];
var randomPos = posCollection[Math.floor(Math.random() * posCollection.length)];

// console.log(randomName);
// console.log(randomVerb);
// console.log(randomPos);

console.log(randomName + " " + randomVerb + " "+ randomPos + ".");
