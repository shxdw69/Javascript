//Check Even or Odd
let num = 7;
if (num % 2 === 0)
  console.log("Even");
else
  console.log("Odd");


//Check Positive, Negative, or Zero
let n = -5;
if (n > 0)
  console.log("Positive");
else if (n < 0)
  console.log("Negative");
else
  console.log("Zero");


//Find Maximum of Two Numbers
let a = 10, b = 20;
if (a > b)
  console.log(a + " is greater");
else
  console.log(b + " is greater");


//Find Maximum of Three Numbers
let x = 15, y = 30, z = 25;
if (x >= y && x >= z)
  console.log(x + " is largest");
else if (y >= x && y >= z)
  console.log(y + " is largest");
else
  console.log(z + " is largest");


//Check Leap Year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  console.log("Leap year");
else
  console.log("Not a leap year");


//Check Voting Eligibility
let age = 17;
if (age >= 18)
  console.log("Eligible to vote");
else
  console.log("Not eligible to vote");


//Check Divisibility by 5 and 11
let num1 = 55;
if (num1 % 5 === 0 && num1 % 11 === 0)
  console.log("Divisible by 5 and 11");
else
  console.log("Not divisible by 5 and 11");


//Check Alphabet, Digit, or Special Character
let ch = 'A';
if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
  console.log("Alphabet");
else if (ch >= '0' && ch <= '9')
  console.log("Digit");
else
  console.log("Special Character");


//Check Vowel or Consonant
let letter = 'e';
if ("aeiouAEIOU".includes(letter))
  console.log("Vowel");
else
  console.log("Consonant");


//Check Uppercase or Lowercase Alphabet
let c = 'G';
if (c >= 'A' && c <= 'Z')
  console.log("Uppercase");
else if (c >= 'a' && c <= 'z')
  console.log("Lowercase");
else
  console.log("Not an alphabet");


//Check Weekday Name
let day = 4;
if (day === 1) console.log("Monday");
else if (day === 2) console.log("Tuesday");
else if (day === 3) console.log("Wednesday");
else if (day === 4) console.log("Thursday");
else if (day === 5) console.log("Friday");
else if (day === 6) console.log("Saturday");
else if (day === 7) console.log("Sunday");
else console.log("Invalid day number");


//Check Month Name and Days
let month = 2;
if (month === 1) console.log("January - 31 days");
else if (month === 2) console.log("February - 28 or 29 days");
else if (month === 3) console.log("March - 31 days");
else if (month === 4) console.log("April - 30 days");
else if (month === 5) console.log("May - 31 days");
else if (month === 6) console.log("June - 30 days");
else if (month === 7) console.log("July - 31 days");
else if (month === 8) console.log("August - 31 days");
else if (month === 9) console.log("September - 30 days");
else if (month === 10) console.log("October - 31 days");
else if (month === 11) console.log("November - 30 days");
else if (month === 12) console.log("December - 31 days");
else console.log("Invalid month number");


//Check Grade of Student
let marks = 85;
if (marks >= 90) console.log("Grade A");
else if (marks >= 80) console.log("Grade B");
else if (marks >= 70) console.log("Grade C");
else if (marks >= 60) console.log("Grade D");
else console.log("Grade F");


//Check Leap Century Year
let cyear = 2000;
if (cyear % 400 === 0)
  console.log("Leap century year");
else
  console.log("Not a leap century year");


//Check Even/Odd Days in Month
let days = 31;
if (days % 2 === 0)
  console.log("Even number of days");
else
  console.log("Odd number of days");


//Check Eligibility for Driving License
let driverAge = 20;
if (driverAge >= 18)
  console.log("Eligible for driving license");
else
  console.log("Not eligible");


//Check Pass or Fail
let studentMarks = 37;
if (studentMarks >= 40)
  console.log("Pass");
else
  console.log("Fail");


// Electricity Bill Calculation
let units = 250;
let bill = 0;

if (units <= 50)
  bill = units * 0.50;
else if (units <= 150)
  bill = (50 * 0.50) + (units - 50) * 0.75;
else if (units <= 250)
  bill = (50 * 0.50) + (100 * 0.75) + (units - 150) * 1.20;
else
  bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + (units - 250) * 1.50;

let surcharge = bill * 0.20;
let totalBill = bill + surcharge;
console.log("Electricity Bill = ₹" + totalBill.toFixed(2));