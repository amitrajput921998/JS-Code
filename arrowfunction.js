const user={
    username:"amit",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}
// this will used to refer current contxt element

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);
this will give you empty curly bracket

function one(){
    let username="amit"
    console.log(this.username);
}

// one()

const one=function(){
    let user="amit"
    console.log(this.user);
}

const one=()=>{
    let user="amit"
    console.log(this);
}

one()

arrow function
const addTow=(num1,num2)=>{
    return num1+num2
}

console.log(addTow(2,3));

implicite return
const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"amit"})


console.log(addTwo(3,4));

const myArray=[2,3,4,5,6,7]


