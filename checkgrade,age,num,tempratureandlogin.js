//1. Check Grade Based on Marks:
let marks = prompt("Enter your marks");

if (marks >= 80) {
  alert("Grade: A");
} else if (marks >= 70) {
  alert("Grade: B");
} else if (marks >= 60) {
  alert("Grade: C");
} else if (marks >= 50) {
  alert("Grade: D");
} else {
  alert("Fail");
}

//2. Check Age Category (child/ teenager/ adult/ senior citizen):
let age = prompt("Enter your age");

if (age < 13) {
  alert("Child");
} else if (age < 20) {
  alert("Teenager");
} else if (age < 60) {
  alert("Adult");
} else {
  alert("Senior Citizen");
}

//3. Check Number Type (positive/ negative/ zero):
let num = prompt("Enter a number");

if (num > 0) {
  alert("Positive Number");
} else if (num < 0) {
  alert("Negative Number");
} else {
  alert("Zero");
}

//4. Check temperature (cold/ normal/ hot):
let temp = prompt("Enter temperature");

if (temp < 15) {
  alert("Cold");
} else if (temp <= 30) {
  alert("Normal");
} else {
  alert("Hot");
}

//5. Login check (admin login/user login/ invalid login):
let username = prompt("Enter username");
let password = prompt("Enter password");

if (username === "admin" && password === "1234") {
  alert("Admin Login Successful");
} else if (username === "user" && password === "1234") {
  alert("User Login Successful");
} else {
  alert("Invalid Login");
}
