var Kwasi = Sunday
var Kwadwo = Monday
var Kwabena = Tuesday
var Kwaku = Wednesday
var Yaw = Thursday
var Kofi = Friday
var Kwame = Saturday

var Akosua = Sunday
var Adwoa = Monday
var Abenna = Tuesday
var Akua = Wednesday
var Yaa = Thursday
var Afua = Friday
var Ama = Saturday

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
d = (((C/4) - 2*C-1) + ((5*Y/4) ) + ((26*(M+1)/10)) + D )%7
console.log
