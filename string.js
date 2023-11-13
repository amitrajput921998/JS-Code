const name="amit"
const repoCount=50

// console.log(name+repoCount+"Value");

console.log(`this is my name ${name} and my repo count is ${repoCount}`);

const gameName=new String('hello')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))

console.log(gameName.indexOf('o'));

const newString=gameName.substring(0,2)
console.log(newString);

const antherString=gameName.slice(0,3)

console.log(antherString);

// trim
const newStringone="  amit "
console.log(newStringone);
console.log(newStringone.trim());

const url="htpps://amit.com/amit%20singh"


console.log(url.replace('%20','_'));

console.log(url.includes('amit'));

console.log(url.split('/'))

const name=new String('bharuch')

console.log(name.at(0));
console.log(name.big('b'));
console.log(name.blink('b'));
console.log(name.bold('b'));