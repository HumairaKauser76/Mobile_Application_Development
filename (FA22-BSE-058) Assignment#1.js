
let str = "Humaira Kauser";// This the string on which i will apply all the methods of the string


console.log("***********************************************");
console.log("Now I am applying the methods of String...!!!\n");

console.log("Length of String i: ", str.length);

console.log("Character at (2) is: ", str.charAt(2));

console.log("Char Code At(2) is: ", str.charCodeAt(2));

console.log("At position(-1): ", str.at(-1));

console.log("At str[0]: ", str[0]);


console.log("slice(0, 7): ", str.slice(0, 7));

console.log("substring(0, 7): ", str.substring(0, 7));

console.log("substr(0, 7): ", str.substr(0, 7)); 

console.log("In Upper Case: ", str.toUpperCase());

console.log("In Lower Case: ", str.toLowerCase());

console.log("Concatenation of String: ", str.concat(" is a software engineer."));

console.log("After trim: ", "   Humaira Kauser   ".trim());

console.log("At trimStart():", "   Humaira Kauser   ".trimStart());

console.log("At trimEnd():", "   Humaira Kauser   ".trimEnd());

console.log("padStart(20, '*'):", str.padStart(20, "*"));

console.log("padEnd(20, '*'):", str.padEnd(20, "*"));

console.log("Repeating: ", str.repeat(3));

console.log("Replacing Kauser with Ahmad: ", str.replace("Kauser", "Ahmad"));

console.log("Replace All: ", str.replaceAll("apple", "orange","Apple"));

console.log("Split: ", str.split(" "));

console.log("Index Of('Kauser'): ", str.indexOf("Kauser"))
;
console.log("Last Index Of('a'): ", str.lastIndexOf("a"));

console.log("Search for (Kauser): ", str.search("Kauser"));

console.log("Includes('Kauser'):", str.includes("Kauser"));

console.log("Starts With('Humaira'):", str.startsWith("Humaira"));
console.log("Starts With('H'):", str.startsWith("H"));

console.log("Ends With('Kauser'):", str.endsWith("Kauser"));
console.log("Ends With('K'):", str.endsWith("K"),"\n");


console.log("***********************************************");
console.log("Now i will apply the methods of Array...!!!\n");


let primeArray = [2, 11, 13, 17, 3, 5, 7, 23];// This is the Array on which I will apply all the methods

console.log("Length: ", primeArray.length);

console.log("To String(): ", primeArray.toString());

console.log("At Position (2): ", primeArray.at(2));

console.log("Join Using('-'): ", primeArray.join("-"));

console.log("Remove last element (pop): ", primeArray.pop(), " Now New Array:", primeArray);

console.log("Add an element at the end (push): ", primeArray.push(29), "Now New Array:", primeArray);

console.log(" Remove first element (shift): ", primeArray.shift(), "Now New Array:", primeArray);

console.log(" Add an element at the start (unshift): ", primeArray.unshift(1), "Now New Array:", primeArray);

delete primeArray[2];
console.log("Delete an element primeArray[2]: ", primeArray);


let newPrimeArray = primeArray.concat([31, 37, 41]);
console.log("Concatenate Arrays: ", newPrimeArray);

console.log("Copy elements within array(2, 0): ", primeArray.copyWithin(2, 0));

primeArray.splice(2, 1, 5);
console.log("Splice: Remove and/or add elements: ", primeArray);

let splicedPrimeArray = primeArray.toSpliced(1, 2, 19, 23);
console.log("To Spliced(1,2,19,23): ", splicedPrimeArray);

console.log("Slice: Extract part of the array(1, 4): ", primeArray.slice(1, 4));

console.log("Index Of (7): ", primeArray.indexOf(7));
console.log("Last Index Of (11): ", primeArray.lastIndexOf(11));
console.log("Includes (17): ", primeArray.includes(17));

console.log("Sorted Array: ", primeArray.sort((a, b) => a - b));
console.log("Reversed Array: ", primeArray.reverse());

console.log("Minimum: ", Math.min(primeArray));
console.log("Maximum: ", Math.max(primeArray));
