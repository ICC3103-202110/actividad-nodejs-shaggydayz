

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
 
function fib(n) {
    if (n <= 1){
        return n
    }
    else{
        cosito = fib(n-1)+fib(n-2)
        return cosito
    }
}
  
readline.question("A number pls: ", n => {
    var m = fib(n);
    console.log("The result is: fib =", + m);
    readline.close()
});

