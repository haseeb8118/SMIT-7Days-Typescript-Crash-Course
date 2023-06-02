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
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("btn"); //! mene verify krlia he or ye cheez exist krte he.
var add = function (val1, val2) {
    return val1 + val2;
};
button.addEventListener("click", function () {
    var firstVal = input1.value;
    var secondVal = input2.value;
    console.log(add(+firstVal, +secondVal)); //+ to verify if is an integer.
});




//-----------------------------------------------------------------------------------
/*Basic Types
1. String: string => "Apple", "Orange"
2. Number: number => 1 0 -87 4.5
3. Boolean: boolean => true false */
var person;
person = 8;
var arr;
arr = ["Apple", "Orange",];
arr.push("Pineapple");
arr.push();
var arr2 = [1, 2, 3];
arr2.push();
/*Better to use let or const rather than var */ 
