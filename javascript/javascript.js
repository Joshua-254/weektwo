

function akanName(){
//uer input data collection center
var Y = document.getElementById("userinput").elements.namedItem("year").value;
var C = document.getElementById("userinput").elements.namedItem("century").value;
var M = document.getElementById("userinput").elements.namedItem("month").value;
var D = document.getElementById("userinput").elements.namedItem("day").value;
//variable names definition
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","kwame"]
var femaleNames = ["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"]
var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

}
//calculator
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//where;
//CC - is the century digits. For example 1989 has CC = 19
//YY - is the Year digits (1989 has YY = 89)
//MM -  is the Month
//DD - is the Day of the month 
//mod - is the modulus function ( % )
 
 ////INPUT REQUIRED
 //Date of birth
 //Gender
 ////OUTPUT REQUIRED
//Akan Name

var C = Prompt(century);
var Y = prompt(year);
var M = prompt(month)

// Day of the week calculation:
function calculate = ((((C/4) - 2*C-1) + ((5*Y/4) ) + ((26*(M+1)/10)) + D )%7){
}


if 
