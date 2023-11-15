// Immediately Invoked Function Expressions (IIFE)

(function one(){
    console.log(`DB Connected`);
}) ();

// one()

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('amit')

