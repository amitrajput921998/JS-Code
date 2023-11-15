// for loop 

for(let i=0;i<=5;i++){
    if (i==5){
        console.log("5 is best number");
    }
    console.log(i);
}

for(let i=0;i<=5;i++){
    console.log(`Outer loop value : ${i}`);
    for(let j=0;j<=5;j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i+'*'+j+'='+i*j);
    }
}

let myarray=["amit","singh","kumar"]

for(let i=0;i<myarray.length;i++){
    console.log(myarray[i]);
}

// breal and continue

for(let i=1;i<=10;i++){
    if(i==5){
        console.log("Detected 5");
        // break
        continue
    }
    console.log(`value of i is ${i}` );
}