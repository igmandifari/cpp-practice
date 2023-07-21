let n=5;
let string = ""

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        string += j
    }
    console.log(string)
    string=""
}

for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i+1; j++){
        string += n-j+1
    }
    console.log(string)
    string=""
}

for(let i=0; i<=n; i++){
    for(let j=1; j<=i; j++){
        if(j%2==0){
            string += "*"
        } else{
            string+=j
        }
    }
    console.log(string)
    string=""
}