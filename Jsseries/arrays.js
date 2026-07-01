// console.log("arrays hai ji");
// arrays :- is a collection of similar data types 
// but in js we can store diff data types in an array but it is not a good practice to do so.
//e.g:-
// let marks = [23,98,78,97,79];
// console.log(marks);
// console.log(marks.length);

// **looping over arrays:-

//let names= ["khushi", "soni", "aditi", "aditya"];

//for loop:- is used to loop over the index of an array

// for(let i =0;i<names.length;i++){
// console.log(names[i]);
// }

// for of loop:- is used to loop over the values of an array

// for(let name of names){
//     console.log( name);
// }

// more e.g:-

// let cities=["bihar", "aurangabad", "amba","rachi"];

// for(let city of cities){
//     //console.log(city);
//     console.log(city.toUpperCase());
// }

//Q1:- avg marks calculate:-

// let marks=[87,97,67,35,77,90];
// let sum = 0;

// for(let i=0;i<marks.length;i++){
// sum= sum+marks[i];

// }
// let avg=sum/marks.length;
// console.log(avg);


// for of se solve :-
// let marks=[89,46,85,45,67,84,98];
// let sum =0;
// for(let val of marks){
//     sum = sum+val;
// }
// let avg=sum/marks.length;
// console.log("avg marks of class is:-",avg);

//Q2:- given arr product all item has 10% off change the arr and store the final values:-

// let items=[900,570,800,550,450,980];
// console.log("items of boxes prices are:-",items);
// for(let i=0;i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
// }
// console.log("after offer of  10% price is:",items);

// //e.g2:-

// let products=[899,789,567,845,734,823];
// console.log("products original price are:-",products);

// for(let i=0;i<products.length;i++){
//     let discount=products[i]/10;
//     products[i]=products[i]-discount;
// }
// console.log("after 25% discount price is:-",products);

// ** array methods:- push, pop,toString,contact:-

// let foodItems= ["jamun","fruits", "vegies","kaju"];
// //foodItems.push("dry","bread");

// foodItems.pop();// last wale item ka remove krta hai.
// console.log(foodItems);


// let family=["maa", "papa","bhai","bahn"];
// let frnds=["manveer","alok"];

// let newfamily=family.concat(frnds);
// console.log(newfamily);


// Q3-remove first item, remove google and add apple, add deloite at end;

// let companies=["uber","microsoft","google","boomberg","netflix"];
// console.log("brfore apply",companies);
// // use shift for remove first item
// companies.shift();
// console.log("after logic:",companies);

// // slice method use for replace :-

// companies.slice(3,1,"flipkart");
// console.log(companies);


