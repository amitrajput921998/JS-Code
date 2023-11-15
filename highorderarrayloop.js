for of
["","",""]
const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings="hello world"

for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

Maps

const map=new Map()
map.set('IN','India')
map.set('Fr','France')

console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myobj={
    'game1':'NFS',
    'game2':'Spiderman'
}

for(const key in myobj){
    console.log(myobj[key]);
}

const prog=["js","c++","python","java"]

for(const key in prog){
    console.log(prog[key]);
}

for each loop

const coding=["js","java","python","swift"]

coding.forEach( function (item) {
    console.log(item);
})

coding.forEach((val)=> {
    console.log(val);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
})

const mycoding=[
    {
        lanngu:"js",
        lag:"python"
    }
]

mycoding.forEach( (item)=>{
    console.log(item.lanngu);
})