// Quastion 1

const { lazy } = require("react");
const { question } = require("readline-sync");


// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Examples

// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

/// points(38, 8) ➞ 100

// Notes

// N/A


function points(pt1,pt2){
let mul1=pt1*2;
let mul2=pt2*3;
let res=mul1+mul2;
return res;

a


}
console.log(points(38,8))


// Quastion 2
// Check Palindrome
// Create a function to check whether a word is palindrome

// Example:
// input: madam
// Outpput: Palindrome






function palindrome(palindrome){

let res="";
    for(i=palindrome.length-1;i>=0;i--){
    res+=palindrome[i]
    }
    if (res===palindrome) {
        console.log(res);
        console.log("This is palindrom")
        
    }else{
        console.log("not palindrom");
        
    }
    
}
palindrome("madam")



// Quastion 3
// Find Smallest Number in Array
// Loop through array and print smallest value
// Example:
// input:
// [10,45,2,89,23]
// Output:
// 2



function smallest(arr){
let sm=arr[0]

for(let i=0;i<arr.length;i++){
   if (arr[i]<=sm){
   sm=arr[i]
   }

   

}
   return sm;
   
 
}
console.log(smallest([10,45,89,3,23]));


// question 4


// Find Second Largest Number
// Use loop and logic to find second highest value


  
// function secondLT(arr){
//   let largest=arr[0];
//     let secondLargest=arr[0];
// for(let i=0;i<arr.length;i++){

  


// if(arr[i]>=largest){
//     secondLargest=largest
//     largest=arr[i]
// }else if(arr[i]>secondLargest  && arr[i] !==largest){
//     secondLargest=arr[i]
// }


// }


  
//     return "Largest number is "+largest+" Second Largest number is "+secondLargest



// }
// console.log(secondLT([600,200,500,400,350]));








function secondLT(arr){
    let largest = arr[0];
    let secondLargest = -Infinity;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >largest) {
            // 👇 THE FIX: Demote the old largest to second largest first!
            secondLargest = largest; 
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    
    return "Largest number is " + largest + ", Second Largest number is " + secondLargest;
}

console.log(secondLT([600, 200, 500, 400, 350]));
