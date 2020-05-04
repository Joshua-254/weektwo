
//uer input data collection center
function purple =(){
var x = document.getElementById("userinput").elements.namedItem("year").value;
var x = document.getElementById("userinput").elements.namedItem("century").value;
var x = document.getElementById("userinput").elements.namedItem("month").value;
var x = document.getElementById("userinput").elements.namedItem("day").value;
}
//variable names definition
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","kwame"]
var femaleNames = ["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"]
var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

var C = century
var Y = Year
var M = Month
var D = Day of the month

//calculator
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//where;
//CC - is the century digits. For example 1989 has CC = 19
//YY - is the Year digits (1989 has YY = 89)
//MM -  is the Month
//DD - is the Day of the month 
//mod - is the modulus function ( % )
 
// Day of the week calculation:

function calculate = (((C/4) - 2*C-1) + ((5*Y/4) ) + ((26*(M+1)/10)) + D )%7
console.log

alert("Your Akan name is "."" );
