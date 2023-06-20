// ---------call stack

// function first(){
//     console.log('first');
//     second();
// }

// function second(){
//     console.log('second');
//     third();
// }

// function third(){
//     console.log('third');
// }

// first();



//-------------execution context

var x=100;
var y=50;

function getSum(n1, n2){
    var sum=n1+n2;
    return sum;
}

var sum1=getSum(x, y);
var sum2=getSum(100,50);
