Array in js
const myArra=[0,1,2,3,4,5,true,"amit"]

console.log(myArra[0]);

shallow copy => call by reference 
deep copy=> call by value 

const myhero=["amit","singh","kumar"]

const arr2=new Array(1,2,3,4)

console.log(arr2[2]);

// array methods

myArra.push(6)
myArra.push(7)
myArra.pop(7)
console.log(myArra);

myArra.unshift(9)
myArra.shift()
console.log(myArra);

console.log(myArra.includes(2));
console.log(myArra.indexOf(2));

const newArr=myArra.join()

console.log(typeof myArra);
console.log(typeof newArr);


// slice
// splice 

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // Output: ['banana', 'orange', 'grape']
console.log(fruits); // Original array is not modified

// splice() Method:

const fruits1 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const removedFruits = fruits.splice(1, 2, 'pear', 'melon');

console.log(removedFruits); // Output: ['banana', 'orange']
console.log(fruits1); // Output: ['apple', 'pear', 'melon', 'grape', 'kiwi']
