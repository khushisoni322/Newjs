 // just basics :-
// function sayMyName(){
//     console.log("k")
//     console.log("h")
//     console.log("u")
//     console.log("s")
//     console.log("h")
//     console.log("i")
// }
// sayMyName();

// eg-1 

// function addTwoNum(num1,num2){
//    console.log(num1+num2)
   
// }

// addTwoNum(3,7);
// addTwoNum(3,"4");
// addTwoNum(3,"b");


//eg-2

// function addTwoNum(num1,num2){
//     let result = num1+num2;
//     return result;
// }
// const result = addTwoNum(4,6);
// console.log("result:",result);

// eg-3 how to take parameter 

// function userLOgged(username){
//     return `${username} just logged in`

// }

// console.log(userLOgged("khushi"));

// eg-4 - take parameter if available 

// function userLOgged(username){
//     if(!username){
//         console.log("please logged in:");
//         return;
//     }  
//     return `${username} just looged in `
    
// }
// console.log(userLOgged());  // if we dont give the aguments and any values

// //console.log(userLOgged("khushi"));


// eg-5 , shopping card use in fun using rest operator (...) -> this is called rest/spread operator based on their use case

// function calculateCart(...num1){
//     return num1;
// }
// console.log(calculateCart(200,500,688));


// eg-6 how to pass obj to the function 

// const user ={
//     name:"khushi",
//     price:1999
// }

// function handleObj(anyObj){
//     console.log( `name is ${anyObj.name} and price is ${anyObj.price}`)
// }
// handleObj(user);


// * scope and local scope

// method 1 for function declrn :- 

// function addOne(num){
//     return num+1

// }
//   console.log(addOne(5));

// we can  also do this 

// console.log(addOne(5));

// function addOne(num){
//     return num+1

// }



// method 2 for fun declrn :- // this is comes in hosting , in hosting we learn  where fun use , where we can place or etc

// const addTwo = function(num){
//     return num+2;
// }
// console.log(addOne(5)); 

// but in this case we cant do this 

// console.log(addTwo(5));
// const addTwo = function(num){
//     return num+2
// }



// Arrow function :- its come in 2015:-

// const user ={
//     username: "khushi",
//     price: 999,

//     welcomeMsg: function(){
//         console.log(`${this.username} , welcome to web`);

        
//         // NOTE:- this keyword basically reffer the current context
//     }

// }
// user.welcomeMsg();
// user.username="saumya";
// user.welcomeMsg();


// const ring = function(){
//     let username = "khush"
//     console.log(this.username); // the output gives  undefined  beacouse this keyword is not work with fun directly its work with obj.

    
// }
// ring();

// **  but we can also not  use this keyword in arrow function  
// NOTE :-  SO basically interview ask ,diff btw arrow fun and regular fun = 
// answer is not that , in arrow fun this keyword is not used and in regular fun we can use this key (wrong answer)
// answer is we cant use this keyword in both either arrow or regular fun , we cant use this keyword

// const ring = () => {
//     let username =" sammy"
//     console.log(this.username);
    

// }
// ring(); // output gives undefined

// * arrow fun (basics) :-

// const keychain = (num1,num2)=> {
//     return num1 + num2

// }
// console.log(keychain(3,7));


 //* implicit return method  of arrow fun :-

// const keychain = (num1,num2) =>   num1 + num2

// console.log(keychain(3,7));
 
// // eg-2 
// const jalebi = (til1,til2) => (til1-til2)
// console.log(jalebi(8,5));


// *** imediate invoked  function   expression (IIFE) ()():-
// we use IIFE beacouse to remove the global scope polution 

(function chai(){ // this is named IIFE bcz its fun have name 
    console.log("db connected");
    
})
();

// IIFE using arrow fun :-

((name) =>{ // simple IIFE
   console.log(`db is connected to ${name}`);
   
})
('khushi')






