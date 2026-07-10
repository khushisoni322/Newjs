

//const Myarr= [1,3,4,6,5];
// console.log(Myarr[0]);

// // array method :-

// Myarr.push(7); // add element at the end
// console.log(Myarr);

// Myarr.pop(); // remove last element
// console.log(Myarr);

// Myarr.shift(); // remove first element
// console.log(Myarr);

// Myarr.unshift(0); // add element at the beginning but it not use in  real world because it is not efficient 
// console.log(Myarr);

// console.log(Myarr.includes(19)); // check if element is present or not

// const newArr= Myarr.join(); // it make the string 
// console.log(Myarr);
// console.log( typeof newArr);

// slice and splice 

// *slice
// console.log( "A " ,Myarr);
// const arr2 = Myarr.slice(1,3); // only print index of elemet 1 to 2 not 3 
// console.log("A= " , arr2 );
//  // splice 
// console.log( "B " ,Myarr);
// const arr3 = Myarr.splice(1,3); // isme 3 index ko include nhi krta blki bs jo
// // elemets hai 1 se 3 tak usko remove kr ke print krta hai to confuse nhi hona 
// console.log( "B= " ,arr3); 
// // dekho really me kya ho rha hai
// console.log("splice reality " , Myarr);

// eg ;2

// const marvel_heros = ["ironman" , "thor" , "spiderman"];
// console.log(marvel_heros)
// const dc_heros = ["batamn", "flash", "superman" ]; 
// console.log(dc_heros)

// // we want to join hai arrays so we dont use push or concat method we use :-

// const all_heros = [...marvel_heros, ...dc_heros];
// console.log( " all heros " , all_heros);