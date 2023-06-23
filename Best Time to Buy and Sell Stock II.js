let stock = [10, 7, 5, 8, 11, 9, 1]
let maxProfit = 0;

for(i=1; i<stock.length; i++){
    if(stock[i]>stock[i-1]){
        maxProfit += stock[i] - stock[i-1]
    }
} console.log(maxProfit)
