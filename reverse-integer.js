var reverse = function(x) {
    let output = 0;  //initialising the reverse value as 0 at beginning
    while(x!=0){ // to stop the while loop once we have completed the reversal
        output = (output * 10) + (x % 10); // maths formula to insert the digit to the number (like in the equation 2 (see the approach section of this solution))
        x = (x - (x % 10))/10; // maths formula to delete the last digit using equation 1 (see the approach section of this solution)
    }  
    return output; // returning the result
};
