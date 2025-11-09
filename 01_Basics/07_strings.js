const userName="Anchal"
const repoCount="50"

console.log(userName + repoCount + " value" );
//the above method is not good to concatinate strings
//by backticks ``

console.log(`Employee ${userName} has ${repoCount} repo in his github profile` );//the benefit is we can use string methods directly


//another way to declare strings 
const name= new String("shhivaa07");
console.log(name[1]);

console.log(name.__proto__); //{} object



//production uses

let url="https://shhivaa.com/Anchal%20Singh"

console.log(url.replace('20', '-'))
 




