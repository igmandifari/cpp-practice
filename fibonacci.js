let firstNum = 1;
let secNum = 2;
let hasil = [];
const num = 10;

for(let i=1; i<=num; i++){
    console.log(""+firstNum)
    hasil=firstNum+secNum
    firstNum=secNum
    secNum= hasil++
}

