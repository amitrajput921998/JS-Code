console.log("hello");

let myDate=new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

let myCreatedate=new Date("2023-01-14")

console.log(myCreatedate.toDateString());

let myTimeStamp=Date.now()

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
})

