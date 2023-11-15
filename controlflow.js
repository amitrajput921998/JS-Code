
const isUser=true

if(2==="2"){
    console.log("hello");
}

<,>,<=,>=,==,=== !=,
const temperature=40
if (temperature<50){
    console.log("less than 50");
}
else{
    console.log("tep is greate than 50");
}

const balance=1000

if(balance>500) console.log("test");

if(balance<500){
    console.log("less than");
} else if(balance<750){
    console.log("less than 750");
}
else{
    console.log("less than 1200");
}

const userLoogeedIn=true

const debiCard=true

if(userLoogeedIn && debiCard ){
    console.log("Allow to buy course");
}

const month=41

switch (month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("Sep");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    default:
        console.log("enter correct month");        
}

// truty and false value

const userEmail=[]

if(userEmail){
    console.log("got the email");
}
else{
    console.log("don't get email");
}

falsy value
false,0,-0,BigInt,)n,null,undefined,NaN

truthy value
"0",'false'," ",[],{},function(){}

const userEmail=true

// Nullish coalescing operator (??):null undefined

let val1;
val1=5??10
val1=null??10

val1=undefined??15
val1=null??10??20

console.log(val1);

terniary operater

condition ?true:false 

const ice=100

ice>=100>console.log("less than 80"): console.log("more than 100");