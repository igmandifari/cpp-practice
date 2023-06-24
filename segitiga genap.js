let n = 9;
let m = 5;
let string = [];
for (let i = 1; i <= m; i++) {
for (let j = i; j <= n - i + 1; j++) {
if (j%2==0){
string+="_"
} else{
string += j;
}
}
string += "\n";
}
console.log(string);
