//clean and simple comparisons when both data types are same 
console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log(2>=1);
console.log(2<=1);


//when data types are not same 

console.log("2">1);
console.log(2>"1");
console.log("2"==1);

//confusing one 
console.log(null>0); //1 f
console.log(null==0);//2 f
console.log(null>=0);//3 t

//Because == equality and comparisons like <,>,<=,>= work differently it >=will convert null to 1 so 
//1>0 returns TRUE

// use of  === is that it will not change the idenity of a number will treated as a datatype given...
//unlike of == which is giving true for this console.log("2"==1);

console.log("2"===1); //false
