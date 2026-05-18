


// Question 1


// Find the Smallest Number (Mixed Loop)
// Given an array of numbers: `let scores = [45, 12, 89, 7, 56];`
// Use any loop you prefer (`for` or `while`) to look through the array and find the **smallest** number, then print it.
// *   **Expected Output:** `7`




function checkEquals(arr1,arr2){
if(arr1.length !== arr2.length){
  return false
}
for(let i=0;i<arr1.length;i++){
  if(arr1[i] !== arr2[i]){
    return false
  }
  }
  return true
}


console.log(checkEquals([1,4,8],[1,4,8]));


    //  Question 2
    //  Asking a user for a password until they get it right


//     let password ="";
// while(password !=="vpthahir"){
//     password=prompt("Enter your password")
// }



// Question 3: The `do...while` Loop (Password Checker)
// Write a `do...while` loop that uses `prompt()` to ask the user to input a secret password. Keep asking them over and over *until* they type the correct password: `"secret123"`. Once they get it right, show an alert saying `"Access Granted"`.


// let password="";
// do{
//  password=prompt("Enter your passwrod");

// }while(password !=="vpthahir")
// alert("Access Granted");







// Quastion 4

// Write a for loop that prints the multiplication table for the number 5, from 5x1 up to 5 x10.
// Expected output
// 10
// 15
// ... up to 50


let num=5;
for(let i=1;i<=10;i++){
let res=i*5;
console.log(i+" x "+ num+" = "+res);
}

let count=5;
    while(count>=1){
  
    console.log(count);
      count--;
     
      
    }
     console.log("Blast off!!");


