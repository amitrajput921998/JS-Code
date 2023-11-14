
// rest operater if you have more then one arugmnet passed in the function
function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(2,400,700,800));

const user={
    username:"amit",
    price:100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:400
})

const mynewarray=[200,300,400]
function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(mynewarray));