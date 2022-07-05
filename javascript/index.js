//to print in javascript
//console API
console.log("Hello from het", 4 + 7 + 6 + 5 + 4 + 1, "what's up");
//alert() also
document.write("This is example of document.write");
console.warn("This is a warning")
console.error("This is an error")
//javascript variables
//containers to store values
//data types
var num1 = 3
var num2 = 5
console.log(num1 + num2);
var s = "String"
console.log(s)
var s1 = "this is string 1 "
var s2 = "this is string 2 "
//objects
var marks = {
    het: 90,
    prish: 100,
    heer: 85
}
//Booleans
var a = true;
var b = false;
console.log(a, b)

var x
console.log(x)
var n = null;
console.log(n)
// there are two types of data type in javascript that are primitive and reference 
//Arrays 
var arr = [1, 2, 3, "HEt SonI", 5, 6, 7]
console.log(arr)
//Arithmetic operations 
var x = 500
var y = 300
console.log(x * y)
console.log(x + y)
console.log(x - y)
console.log(x / y)
var c = y
c++
console.log(c)
++c
console.log(c)
c += x
console.log(c)
// Comparision operator
console.log(x >= y)
//logical operators
console.log(!false)
console.log(!true)

//functions in JS
function avg(a, b) {
    return (a + b) / 2;
}
console.log(avg(3, 2))
c1 = avg(10, 20)
console.log(c1)

//Conditionals in javascript
//If-else statement
var p = 100
if (p > 10) {
    console.log("True")

}
else {
    console.log("false")
}
//you can also perform an If - else ladder 


//Loops in JS
//for loop
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var i = 0; i < a.length; i = i + 2) {
    console.log(a[i])

}
//Using forEach to produce the same output
a.forEach(function (element) {
    console.log(element)
});
//while loop
var b = [1, 2, 3, 4, 5]
var j = 0
// while(j<b.length){
//     console.log(b[j])
//     j++
// }
console.log("---------------------")
//do while loop

// do{
//     if(j==3){
//        // break;
//        continue;
//     }
//     console.log(b[j]);
//     j++;
// } while (j<b.length);


let myarr = ["Het", 1, 2, 3, "soni", null]
console.log(myarr.length)
myarr.pop()
console.log(myarr)
myarr.push("tadaaaaaa")
console.log(myarr)
myarr.push(1)
console.log(myarr)
myarr.shift()
console.log(myarr)
myarr.unshift("Het")
console.log(myarr)
// String methods in javascript
let string = "To find the length of string"
console.log(string.length)
console.log(string.indexOf("length"))
console.log(string.slice(0, 10))
console.log(string.replace("length", "Height"))
// Dates in JS
let date = new Date()
console.log(date.getTime())
console.log(date.getHours())
console.log(date.getDay())
//DOM manipulation
let elem = document.getElementById('click');
console.log(elem)

let elemclass = document.getElementsByClassName("container")
console.log(elemclass)
elemclass[0].style.background = "yellow"
let body = document.getElementsByTagName("body")
console.log(body)
body[0].style.background = "cyan"
console.log(elemclass[0].innerHTML)
console.log(elemclass[0].innerText)
// create a child class
// tn=document.getElementsByClassName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText="This is created paragraph";
// tn[0].appendChild(createdElement);
// createdElement2=document.createElement('b');
// createdElement2.innerText="This is created bold";
// tn[0].replaceChild(createdElement2,createdElement)

// Selecting using query
que = document.querySelector('.container')
console.log(que)
que = document.querySelectorAll('.container')
console.log(que)

//Events in javascript
function clicked() {
    console.log('You have clicked the button just now')
}
// window.onload = function() {
//     console.log('You just reload the webpage')

// }
// Actual events in JS
firstContainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[0].innerHTML = "<b>You have Clicked</b>"
    console.log('Click hua')
    //alert("Ha bhai click ho gya")
})
// firstContainer.addEventListener('mouseover',function(){
//     console.log('Mouse aaya uspe')
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log('Mouse bahar gaya')
// })

//Array function
// function mul(a,b){
//     return a*b;
// }
mul = (a, b) => {
    return a * b;
}

//Set timeout and set interval
arg1 = () => {
    alert("SetTimeout is working ")
}
//setTimeout(arg1,5000);
//setInterval(arg1,2000)


//Local storage, sensitive info store nai karvi aama , it is visible from inspect-application-localstorage
localStorage.setItem('Name', 'Het')
//localStorage.getItem('Name')
//localStorage.clear();

//JSON Example
obj = {
    name: "HHH",
    length: 1
}
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)


//an example 
a = 10
console.log(`This is number ${a} `)