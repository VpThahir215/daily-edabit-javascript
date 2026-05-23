
let res="hello";
let i=res.length -1
let reverse=""
while(i>=0){

   reverse+=res[i]
    i--
}
console.log(reverse);







let k=1;
do{
console.log("hello");

  i++
}while(i<=10)

let person={
    name:"Ronaldo" ,
    club:"Real madrid",
    nation: "portugal"
}
console.log(person);
let arr=["ronaldo","messi","neymar"];
console.log(arr);
let p="joao felix"
arr.push("Neymar")
console.log(arr);
arr.splice(0,1)
console.log(arr);


person.current="Al nasr"
console.log(person);
delete person.club;
console.log(person);



// let hedd=document.getElementById("hed");
// let btn=document.getElementsByName("bot");

// btn. addEventListener("click",fontSize)
// function increase(){
//   hedd.style.fontSize=("200px")
// }

// let hedd=document.createElement("h1");

//   hedd.innerHTML="Hello";
//   document.body.appendChild("hedd");
// let btn=document.createElement("button");
// document.body.appendChild(button)
// btn.addEventListener("click",function(){

//   hedd.style.fontSize="100px"

// })
function qu(quu){
  return quu
}
let q=[]
let b=""
for(let i=1;i<=5;i++){
 b=i**3;
 q.push(b)
 
}
console.log(qu(q));



let ar=[1,2,3,4,5];
let sum=0;
for(let i=1;i<ar.length;i++){
sum=ar[i]+sum;

}
let average=sum/ar.length;
console.log(average);


let cd;
console.log(typeof(cd));
cd++

console.log(cd);



let trafic="red";
switch(trafic){
   case "red":
   console.log("red you can go");
   break;
   case "green":
      console.log("green you can't go");
   break;
   case "blue":
      console.log("blue wait some time");
   break;
   defualt:
      console.log("You are very wrong");
   break;
   }


   let age=9;
   let canVote=(age>19)? "yes you can ":"no you are Young";
   console.log(canVote);
   


   let bca=(c,d)=>  c+d
   
   console.log(bca(10,20));

   
   