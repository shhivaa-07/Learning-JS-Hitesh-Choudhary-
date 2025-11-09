// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log((myDate.toLocaleString()));
console.log(typeof myDate);

let newCreatedDate = new Date(2023,4,7);
let myCreatedDate = new Date(2023,4,7, 9,15);
console.log(myCreatedDate.toLocaleString());

// Methods on Dates

//*1 current time

let myTimeStamp= Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //to convert millisec into sec

//*2 to extract month and year from date

//Day and Month always starts with 0 in JS
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1); //for production end to start with 1
console.log(newDate.getDay());

//*3 `` backticks...$.

//*4 customization using LocaleString...we can apply more properties in LocaleString
newDate.toLocaleString("default",{
    weekday:"long",
})
