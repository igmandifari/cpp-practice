function isPrime(number)
 { 
   if (number <= 1)
   return false;

   // The check for the number 2 and 3
   if (number <= 3)
   return true;

   if (number%2 == 0 || number%3 == 0)
   return false;

   for (var i=5; i*i<=number; i=i+6)
   {
      if (number%i == 0 || number%(i+2) == 0)
      return false;
   }

   return true;
 }

 console.log(isPrime(2))
 console.log(isPrime(3))
 console.log(isPrime(4))
 console.log(isPrime(5))
 console.log(isPrime(6))
 console.log(isPrime(7))