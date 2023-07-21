let n=9;
let string="";

for(let i=1; i<=5; i++){
    for(let j=i; j<=n-i+1; j++){
        if(j%2==0){
            string+="*"
        } else
            string+=j
    }
    console.log(string)
    string=""
}