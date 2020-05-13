
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

//variable name section
var maleGender = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleGender = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var dd = document.getElementById("day").value;
var year = document.getElementById("year").value;
var mm = document.getElementById("month").value;
var male = document.getElementById("male").checked;
var female = document.getElementById("female").checked;
//if else section gender
if (document.getElementById("male").checked) {
var gender = 'male';

} else {
var gender = 'female';
}
//selection for the month section incluiding the various allerts
if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
alert("PLEASE ENTER A VALID MONTH NUMBER (FROM 1 TO 12) !!");
} else if (dd < 1 || dd > 31) {
alert("PEASE ENTER A VALID DAY NUMBER (FROM 1 TO 31)");
}

//CALCULATE SECTION
var yy = year.slice(0, 2);
var yy = year.slice(2, 4);
var cc = (yy - 1) / 100 + 1;
var dayOfTheWeek = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
