// Question 1
// Find Second Largest Number
// Use loop and logic to find second highest value
// Example:
// input:[10,45,89,23]
// Output:45

const { question } = require("readline-sync");



function findNumber(arr){
let lg=arr[0];
let sm=arr[0];
let scLg=[0]
for (let i=0;i<arr.length;i++){
  if(arr[i]>lg){
      scLg=lg;
  lg=arr[i];


}else if(arr[i]<sm){
sm=arr[i]


}else if(arr[i]>scLg && scLg !==lg){
    scLg=arr[i]
}


}

return "The largest number is "+lg+" The smallest number is "+sm +" Second largest number is "+scLg
}


console.log(findNumber([10,445,89,235 ,1,-2]));


// question 2
// Count Even Numbersin Array
// Use loop and condition to count even numbers.
// Example:
// input:[1,2,3,4,5,6]
// Output:3 even Numbers



function findEven(arr){
let count=0;
for(let i=0;i<arr.length;i++){
if(arr[i]%2  ===0){

count++
}


}
return count
}
console.log(findEven([1,2,3,4,5,6]))

// question 3
// Count Occurrrence of an Element
// check how many times a specific number appears in Array.
// Example:
// input:[1,2,2,3,2,4]
// find:2
// Output:3 times


function occ(arr){
let count=0;
let find=4

for(let i=0;i<arr.length;i++){

if(arr[i]===find){
count++
}

}
return count +" times"

}
console.log(occ([1,2,2,3,2,4]))


// Question 4
// Rmove Duplicate value
// Create logic to remove duplicate values from array 
// Examplle:
// input : [1,2,2,3,4,4];
// Output:[1,2,3,4]







function rm(arr){
let check=[];
for(let i=0;i<arr.length;i++){
    if(check.includes(arr[i])){

    }else{
check.push(arr[i])
    }
}


return check

}
console.log(rm([1,2,2,3,4,4]))



// Question 5
// Multiplication Table Generator 
// Create a function using loop to print multiplication table.


let num=5;
for(let i=1;i<=num;i++){
    let mul=i*num;
    console.log(num +" X "+i +" = "+mul);
    
}

// Question 6
// Check Prime Number
// Use loop and conditioin to check prime number.

// Example:
// Input:7
// Output:Prime Number




function primeNumber(num){
if(num<1){return "It is composite number"}
for (let i=2;i<num;i++){
if(num%i ===0){
return "It is composite number"

}

}

return "It is prime number"
}
console.log(primeNumber(9))



// Question 7


// Create a function which returns the number of true values there are in an array.
// Examples

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// Notes

//     Return 0 if given an empty array.
//     All array items are of the type bool (true or false).


function countTrue(arr) {
	let count=0;
	for(let i=0;i<arr.length;i++){
		if(arr[i]===true){
			count++
		}
	}
	return count
}
console.log(countTrue([true,false,true,false,false]));




function givemeSomthing (string){


return "somthing"+string

}
console.log(givemeSomthing("is better than nothing"))


for(let i=1;i<=5;i++){
    let res="";
        for(let s=5;s>=i;s--){
            res+=" "
        }
    for(let j=1;j<=i;j++){
        res="* "
        
    }

        console.log(res);
    
}