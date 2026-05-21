// Create a function that takes two dates and returns the number of days between the first and second date.
// Examples

// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// ) ➞ 6


// getDays(
//   new Date("December 29, 2018"),
//   new Date("January 1, 2019")
// ) ➞ 3
// // Dates may not all be in the same month/year.


// getDays(
//   new Date("July 20, 2019"),
//   new Date("July 30, 2019")
// ) ➞ 10

// Notes

// N/A





;


let a="June 14,2019";
let b="June 20,2019";


function getDaysDifference(Day1,Day2){
let D1= new Date(Day1);
let D2=new Date(Day2);
let defferenceInMs=D2-D1;
console.log(defferenceInMs);
let prsc=1000*60*60*24;
console.log(prsc);

let defferenceInDays=defferenceInMs/prsc;
return defferenceInDays

}

console.log(getDaysDifference(a,b))




// Mubashir needs your help to plant some trees. He can give you three parameters of the land:

//     width of the land w
//     length of the land l
//     gap between the trees g

// You have to create an algorithm to return the number of trees which can be planted on the edges of the given land in a symmetrical layout shown below (unsymmetrical gap = x, tree = o, gap = -):

// w=3, l=3, g=1
// plantTrees(w, l, g) ➞ 4

// o - o
// -   -
// o - o

// // Mubashir can plant 4 trees.

// w=3, l=3, g=3
// plantTrees(w, l, g) ➞ 2

// o - -
// -   -
// - - o

// // Mubashir can plant 2 trees.

// If the layout is not symmetrical, you have to return 0:

// w=3, l=3, g=2
// plantTrees(w, l, g) ➞ 0

// o - -
// x   o
// x x x

// // Planting 2 trees mean the gap of two trees will be greater than 2.

// o - -
// x   o
// o - -

// // Planting 3 trees mean the gap of two trees will be less than 2.

// Another Example for better understanding:

// w=3, l=3, g=0
// plantTrees(w, l, g) ➞ 8

// o o o
// o   o
// o o o

// // Mubashir can plant 8 trees.

// Notes

// N/A








// Question 2 Leet code



// Topics
// premium lock iconCompanies
// Hint

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

 

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

 
// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?










let num=[2,7,11,15];
let target=9;
    let arr=[];

 for (let i=0;i<num.length;i++){
  for(let j=i+1;j<num.length;j++){
    if(num[i]+num[j]===target){
        console.log([i,j]);
        
    }
  }
 }



 var twoSum = function(nums, target) {
let arr=[];

 for (let i=0;i<nums.length;i++){
  for(let j=i+1;j<nums.length;j++){
    if(nums[i]+nums[j]===target){
     
        return [i,j]
    }
  }
 }


};
console.log(twoSum([2,7,11,15],9));



// Question 3 Leet code

// Palindrome Number
// Easy
// Topics
// premium lock iconCompanies
// Hint

// Given an integer x, return true if x is a , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

// Constraints:

//     -231 <= x <= 231 - 1

 
// Follow up: Could you solve it without converting the integer to a string?

var isPalindrome = function(x) {
    let str=x.toString()
    let res="";
    for(let i=str.length-1;i>=0;i--){
     res+=str[i];

    }
    
    
    if (res===str){
        return true
    }else{
        return false
    }
};
console.log(isPalindrome(1921))




    