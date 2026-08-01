//** */ for
// for(let i=0;i<=10;i++){
//     const elemets = i;
//     console.log(elemets);
    
// }

// //****/ outer and inner loop :-
// for(let i=0;i<=10;i++){
//     console.log(`outer loop value : ${i}`);
    
//     for(let j=0; j<=10 ; j++){
//         console.log(i + '*' + j + '=' + i*j);
        
//     }
// }

// ** array by loop :-

// const myArray = ["superman", "spiderman", "batman"];
// console.log(myArray.length);

// for(let i = 0;i<myArray.length;i++){
//     let elemets= myArray[i];
//     console.log(elemets);
    
// }

// ** keyword:- break and continue

// break :-
// console.log(" here example of break");
// for(let index=1;index<=10;index++){
//     if(index==5){
//         console.log(`detect 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
// // continue :-
// console.log(" here example of continue");

// for(let index=1;index<=10;index++){
//     if(index==5){
//         console.log(`detect 5`);
//         continue 
//     }
//     console.log(`value of i is ${index}`);
    
// }
//*** */ while loop :-

// let index = 0;
// while(index<=10){
//     console.log(`value of index is ${index}`)
//    index = index+1
// }


// ***** from array :-

// let myArray = ["hanuman ji" , "krishna ji" , "mahadev ji" ,"vishnu ji"];
// let i =0;
// while(i<myArray.length){
//     console.log(`my superhero is ${myArray[i]}`);
//     i=i+1;
// }

// ***** do while loop :-

// let score=1;
// do{
//     console.log(` now score is ${score}`);
//     score++
// }
// while(score<=10);

// ***** for of loop for array ******

// const arr = [1,2,3,4,5,6,7]
// for(const i of arr){
//     console.log(i);
    
// }

// eg-2

// const greeting = "helloworld!"
// for(const greet of greeting){
//     console.log(`char is ${greet}`);
    
// }

// ***** map => its a object that collect unique value other than this you can read fromm mdn doc plzz

// const map = new Map()
// map.set('IND',"inida")
// map.set('FR',"france")
// map.set('USA',"united state of america")
// map.set('IND',"inida") //  this will not pront bcz it already in the map only unique value print
// //console.log(map);

// // now lets add the loop in map 

// for(const [i,value] of map){ // this is the synx of getting value 
//     console.log(i , "=>" , value); 
// }

// ****** now how to add loops in objects => by forin loop 

// const myObj = {
//     js : 'javascriot',
//     cpp : 'c++',
//     rb : 'ruby'
// }
// for(const key in myObj){
//     console.log(`${key} shortcut for ${myObj[key]}`);
    
// }

// ****** for in loop for array :-

const programming = ['js','py', 'java','c++']
for(const key in programming){
    console.log(programming[key]); // this is the syx for array of for in loop 
    
}
