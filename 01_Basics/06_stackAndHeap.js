//STACK    (primitive)                                               

// ╭─────────────╮
// │  userTwo    │
// ╰─────────────╯
// ╭─────────────╮
// │  userOne    │
// ╰─────────────╯
// ╭─────────────╮
// │   homeName  │-------   copy got changed not original  //Anchal
// ╰─────────────╯      |
// ╭─────────────╮      |
// │ anotherName │      |  copied
// ╰─────────────╯      |
// ╭─────────────╮      |
// │  homeName   │------| //shiva originald
// ╰─────────────╯

let homeName="Shiva";
anotherName=homeName;

 console.log(homeName);   /* Shiva
                             Anchal
                           */

anotherName="Anchal"
console.log(anotherName); 


// Heap(non primitive)

// ╭──────────────────────────────╮
// │let userOne={                 │<------------userOne            
// │   email:"anchal@google.com"  │           //Both will refer to same heap
// │     }                        │<------------userTwo              
// │                              │ 
// ╰──────────────────────────────╯    
          //Heap
let userOne={ 
    email:"anchal@google.com"
}
userTwo=userOne;
//but changes both userone and usertwo
userTwo.email="shiva@google.com"

console.log(userOne.email)
console.log(userTwo.email)
