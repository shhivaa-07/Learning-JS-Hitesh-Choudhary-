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






