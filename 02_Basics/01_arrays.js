// array
const myArr =[3,5,3,5,6,1];
//console.log(myArr);

//another method to define array
const newArr= new Array(3,6,8,5,4);
//console.log(newArr);

//array methods
newArr.push(10); //add
//console.log(newArr);
newArr.pop()//delete last element from array

//console.log(newArr);

// shift , unshift 

newArr.unshift(9); //shifts the array my adding an element in the starting of it....not a good method...for large data
//console.log(newArr);

newArr.shift()
//console.log(newArr);

//includes and indexof
//console.log(newArr.includes(4)); //boolean
//console.log(newArr.indexOf(4)); // -1 for the given value is not present in the array...

//join
const anotherArr =newArr.join()//returns the same array with string object

// console.log(newArr);
// console.log(anotherArr);

// console.log(typeof newArr);

//slice ,splice **imp for interview

console.log("A",newArr);
const myNewArr1= newArr.slice(1,3);
console.log(myNewArr1);
console.log("B",newArr);


const myNewArr2= newArr.splice(1,3);

console.log("C",newArr);
console.log(myNewArr2);
//it confuses the coder by including range and some
//  people think that is the feature of splic but it extracts the part and and seperates it from original array and changes it  













