// 1. Join all elements of an array into a string
var myColor = ["Red", "Green", "White", "Black"];
console.log("=== Join Array Elements ===");
console.log(myColor.join());         // "Red,Green,White,Black"
console.log(myColor.join(','));      // "Red,Green,White,Black"
console.log(myColor.join('+'));      // "Red+Green+White+Black"

// 2. Find the most frequent item in an array and count it
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var freq = {};
var maxCount = 0;
var maxItem;

for (var i = 0; i < arr1.length; i++) {
  var item = arr1[i];
  freq[item] = (freq[item] || 0) + 1;
  if (freq[item] > maxCount) {
    maxCount = freq[item];
    maxItem = item;
  }
}

console.log("\n=== Most Frequent Item ===");
console.log(maxItem + " ( " + maxCount + " times )");

// 3. Truncate a string to a certain length
function truncateString(str, num) {
  return str.slice(0, num);
}

console.log("\n=== Truncate String ===");
console.log(truncateString("Robin Singh", 4)); // "Robi"

// 4. Capitalize the first letter of each word in a string
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log("\n=== Capitalize Words ===");
console.log(capitalizeWords('js string exercises')); // "Js String Exercises"
