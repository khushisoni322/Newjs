console.log("lets learn dates in js");


const myDate = new Date();
console.log(myDate); // it will give the current date and time in key value pairs

console.log(myDate.toDateString()); // it will give the current date in string format

console.log(myDate.toTimeString()); // it will give the current time in string format

console.log(myDate.toLocaleString()); // it will give the current date and time in local format

console.log(myDate.toISOString()); // it will give the current date and time in ISO format

console.log(myDate.toJSON()); // it will give the current date and time in JSON format

console.log(typeof myDate); // it will give the type of myDate object which is object


let CreatedDate = new Date('2026-02-16'); // it will create a date object with the given date
console.log(CreatedDate);
let myTimeStamp = Date.now();
console.log(myTimeStamp); // it will give the current timestamp in milliseconds since 1970-01-01
console.log(CreatedDate.getTime()); // it will give the timestamp of the created date in milliseconds since 1970-01-01 
// above case help in comparing the two dates by converting them into timestamp and then comparing them


let newDate = new Date();
console.log(newDate.getMonth()); // it will give the current month in number format starting from 0 to 11
console.log(newDate.getFullYear()); // it will give the current year in number format
console.log(newDate.getDate()); // it will give the current date in number format
console.log(newDate.getDay()); // it will give the current day in number format starting from 0 to 6

newDate.toLocaleString('default',{ // it will give the current date and time in local format with options
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
})