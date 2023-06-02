//Typescript is javascript superset.

// Javascript Code
// var input1 = document.getElementById("num1");
// var input2 = document.getElementById("num2");
// var button = document.getElementById("btn");

// var add = function(val1, val2){
//     return val1 + val2;
// };

// button.addEventListener("click", function(){
//     var firstVal = input1.value;
//     var secondVal = input2.value;
//     console.log(add(firstVal, secondVal));
// })

// TypeScript Code
const input1 = document.getElementById("num1")!  as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.getElementById("btn")!; //! mene verify krlia he or ye cheez exist krte he.

const add = function(val1: number, val2: number){ //Define vriable type
    return val1 + val2;
};

button.addEventListener("click", function(){
    const firstVal = input1.value;
    const secondVal = input2.value;
    console.log(add(+firstVal, +secondVal)); //+ to verify if is an integer.
})


//-----------------------------------------------------------------------------------
/*Basic Types
1. String: string => "Apple", "Orange"
2. Number: number => 1 0 -87 4.5
3. Boolean: boolean => true false */

let person: number;

person = 8;

let arr: string[];

arr = ["Apple", "Orange", ];
arr.push("Pineapple");
arr.push();

const arr2: number[] = [1, 2, 3];
arr2.push();

/*Better to use let or const rather than var */