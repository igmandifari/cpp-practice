let firstNum = 0;
let secNum = 1
var next= '';
var num=8;

for(let i=0; i<num; i++){
    document.write("" + firstNum)
    next = firstNum + secNum;
    firstNum = secNum;
    secNum = next++
    
}
