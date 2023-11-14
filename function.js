// function in js

// function defination
function sayMyname(){
    console.log("hello");
}

function reference
sayMyname()

function addTwoNumber(num1,num2){
    console.log(num1+num2);
}

addTwoNumber(4,"a")

const result=addTwoNumber(3,5)

console.log(result);

function addTwoNumber(num1,num2){
    let result=num1+num2
    return result
}

const result= addTwoNumber(3,4)
// console.log(result);

function loginUserMessage(username="sumit"){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("asi"));

const a=loginUserMessage("amit")
console.log(a);