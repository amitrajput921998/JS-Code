// singleton

// object literals

// Object.create

const mySym=Symbol("keys1")

const jsuser={
    name:"amit",
    [mySym]:"mykeys1",
    age:18,
    location:"varodara",
    email:"amit@gmail.com",
    islogged:false,
    lastLoginDays:["Monday","Saturday"]

}
// accessing symbole value
console.log(jsuser[mySym]);
console.log(jsuser.email);
console.log(jsuser['email']);

jsuser.email="smit@chat.com"

console.log(jsuser.email);

jsuser.greeting=function(){
    console.log("hello everyone");
}

jsuser.greeting1=function(){
    console.log(`Hello user,${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greeting1());
