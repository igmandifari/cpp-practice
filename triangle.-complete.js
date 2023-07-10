let n = 5; // height of pattern
let string = "";
// External looap
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= n - i + 1; j++) {
      if(j%2==0){
          string += "_"
      } else{
          string += n - j + 1
      }
  }
  console.log(string);
  string = "";
}
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += j
  }
  console.log(string);
  string = "";
}
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= n - i + 1; j++) {
    string += j
  }
  console.log(string);
  string = "";
}
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= n - i + 1; j++) {
    string += n - j + 1
  }
  console.log(string);
  string = "";
}
