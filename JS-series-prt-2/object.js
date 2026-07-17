// // singleton -  if we create obj by contructor it will be singleton obj. not by literals

// // obj literals :-


// const obj0 = Symbol("key1")
// const user = {
//     name:"khushi",
//     age:21,
//     [obj0]:"mykey1", // syx to access the symbol
//     branch:"cse",
//     semester:"5th",
//     year : "3rd",
//     roll_num:"sg24322",
// }
// console.log("user details ", user);
// console.log(user.branch);
// // or we can do is :-
// console.log(user["branch"]);
// console.log(user[obj0]); // print the symbol;

// // eg-of combine means all obj print :-
// // method-1:-
// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

// //const obj3= {obj1,obj2}
// //console.log(obj3); // problem in this method is it print obj containing obj you can see in output

// // method -2
// //const obj3= Object.assign({},obj1,obj2); // in tis case all obj are combine in single obj 
// //console.log(obj4);  

// // method -3 - spread operator use , usually we use this method 

// const obj3={...obj1,...obj2}
// console.log(obj3);

// // method-4 , use it when value comes from database

// const users=[
//     {
//         id:12,
//         email:"jhdj@gmail.com"
//     },
//     {
//           id:13,
//         email:"jhkkj@gmail.com"
//     }
// ]
// users[1].email
// console.log(users)
// console.log(Object.keys(user)) // in this method output become array so it is vaery useful for production level
// console.log(Object.values(user)) 

// // for checking the property 

// console.log(user.hasOwnProperty('branch')); // it return true,
// console.log(user.hasOwnProperty('isloggned')); // it return false


// // object destructure 

// const course = {
//     coursename: "javascript for placements prep",
//     price:999,
//     fuculty:"hiteshSir"
// }

// const {fuculty : teacher} = course // fuculty-> teacher , so here we destructure the key , if you want 
// console.log(teacher);


