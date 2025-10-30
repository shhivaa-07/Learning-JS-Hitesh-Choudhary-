// let marks="88"

// let marks="88aby"
// let marks=null;
let marks=undefined;

console.log(typeof marks);//string for"88"
//object for null

let valueInNumber= Number(marks);
console.log(typeof valueInNumber); //number for "88" but shows number for "88aby" as well which 
                                   //and considered as bug in JS 
                                   //number for null as well
                                   //number for undefined
console.log(valueInNumber);//...will give NaN not a number while printing it for "88aby"
//but type of nan is number
//nan for undefined
//similarly for boolean true=>1 & false=>0
//0 for null

// remember when...empty string is converted to boolean it will return FALSE


//*********************operations*********************************************** */
// console.log(2+2);
//same for all basic * - ** %


let str1="Anchal"
let str2=" Singh"
let str3=str1+str2;
console.log(str3);


/*but problem arise when we add string and number together then
 it depends which datatype appeared first.
REFER THIS: https://tc39.es/ecma262/#sec-toprimitive
in detail
*/
 console.log("1" + 2)
 console.log(1+"2")
// no prob for two 
// console.log(1+2+"3"); ///will give 33 but it depends on starting element datatype




// console.log("1"+2+3) //will give 123 coz first element's datatype is string


// console.log(3 + 4 * 5 % 3);   //This code is not appreciated for industry level always use ().

// console.log((3 + 4) * 5 % 3);    //if we have to define using values...don't mess it up like above.



//TRICKY CONVERSIONS

// console.log(true);
// console.log(+true);  //1

// console.log(+"")  // 0 coz empty string is false


//if some variables have same value then
let num1,num2,num3;
//rather
 num1=num2=num3=2+2;

let gameCounter=100
++gameCounter;
console.log(gameCounter);
//*******************************************REMEMBER*************************************/
/* let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);

Explanation:

The key difference is in how the postfix increment operator (
x
+
+
x++) works:

x++ means: "Return the current value of x (which is 3), then increment x by one (to 4)."

So when you assign const y = x++;, y gets the value before the increment—so y is 3.
*/
//some more[postfix]
/*
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

[prefix]
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n

*/

