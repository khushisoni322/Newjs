// // if

// // const isUserLoggedIn = true;
// // if(isUserLoggedIn){
// //     console.log("yes logged in ");
    
// // }

// // // types of comparison :- <,>,<=,>=,==(comparison),===(strict checking with data type),!=,


// // const temperute = 40;
// // if(temperute<50){
// //     console.log("less then 50");
// // }
// // else{
// //     console.log("greater then 50");
    
// // }

// // nexting:-

// // const balance = 1000;

// // if(balance < 500){
// //     console.log("less than 500");

// // }
// // else if(balance < 750){
// //     console.log("less than 750 ");
    
// // }
// // else if(balance < 900){
// //     console.log("less than 900");
    
// // }
// // else{
// //     console.log("its less than 1200");
    
// // }


// // eg -** real life case in online shopping :-

// // case-1 = && -  cheking both condtn should be true.

// const isUserLoggedIn = true;
// const debitCard = true;

// if(isUserLoggedIn && debitCard){ // && cheking both condtn should be true
//     console.log("can buy cources");
    
// }

// // case-2 = || -  cheking atleast  one  condtn should be true.

// const loggedInByGoogle = false;
// const loggedInByEmail = true;
// if(loggedInByEmail || loggedInByGoogle){
//     console.log(" user can be logged in ");
    
// }

// // ******* switch case **********

// const month = 4;

// switch(month){
//     case 1:
//         console.log("jan");  
//     break;
//     case 2:
//         console.log("feb");  
//     break;
//     case 3:
//         console.log("mar");  
//     break;
//     case 4:
//         console.log("aprl");  
//     break;
//     default:
//         console.log("default case match");
        
//         break;
// }

// // NOTES-> falsy values:- false, 0 , -0 , BigInt(0n), "" ,null , undefine, NaN.

// // NOTES-> truthy values:- "0" , "false" , " " ,[] , {}, function(){}

// // *** nullish coalescing operator (??) - based for null and undefined

// let val1;
//  //val1= 8 ?? 10 ;
//  //console.log(val1); // output will be 8 
   
//  val1 = null ?? 10;
//  console.log(val1); // output will be 10 
 

//  // ternary operator (?) :-

//  const iceprice = 100;
//  iceprice <=80 ? console.log("less then 80 ") : console.log("more then 80");
 
 