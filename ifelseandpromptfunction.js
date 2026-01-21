//1. Show the number is Positive or Negetive:
let num=prompt("Enter a Number");
if (num > 0 ) {
    console.log("Positive Number");
} else if (num < 0 ) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

//2. Even or Odd:
let num=prompt("Enter a Number");
if (num % 2=== 0 ) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

//3. Adult or Minor:
let num=prompt("Enter a Number");
if (age >= 18 ) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//4. Greater from Two Numbers:
let num1=prompt("Enter First Number");
let num2=prompt("Enter Second Number");
if (num1 > num2) {
   console.log("First Number is Greater");
} else if (num2 > num1) {
   console.log("Second Number is Greater"):
} else {
    console.log("Both Numbers are Equal");
}

//5. Check Whether the Input is Zero:
let num=prompt("Enter a Number");
if (num==0) {
    console.log("Number is Zero");
} else {
    console.log("Number is Not Zero");
}

//6. Show the Number is Divisible by 5 or Not:
let num=prompt("Enter a Number");
if (num % 5===0) {
    console.log("Divisible by 5");
} else {
    console.log("Not Divisible by 5");
}

//7. Login Check (Success or Failed):
let username=prompt("Enter Username");
let password=prompt("Enter Password");
if (username==="admin" && password=== "1234") {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

//8. Empty Input Check:
let value=prompt("Enter Something");
if (value==="" || value ===null) {
    console.log("Input is Empty");
} else {
    console.log("Input is Empty");
}

//9. Check Voting Eligibilityby Given User Age:
let age=prompt("Enter Your Age");
if (age>= 29) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible for Voting");
}
