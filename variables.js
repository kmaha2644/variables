//variables
let name="Maha";
let course="Web Development Learning";
const age=33;

document.getElementById("head").innerHTML=course;
window.alert(course);

//1. String:
let text="CodeCraft By Maha";
document.write(text +"<br>");

//2. String Lenth:
document.write(text.length +"<br>");

//3. Uppercase:
document.write(text.toUpperCase() +"<br>");

//4. Lowercase:
document.write(text.toLowerCase() +"<br>");

//5. Combine Two Strings:
let firstword="CodeCraft";
let secondword="By Maha";
document.write(firstword + secondword +"<br>");

//6. Get First Character:
document.write(text.charAt(0) +"<br>");

//7. Get Last Character:
document.write(text.charAt(text.length - 1) +"<br>");

//8. Check Word Exists:
document.write(
    text.includes("CodeCraft By Maha") +"<br>"
);

//9. Replace a Word:
document.write(
    text.replace("CodeCraft By Maha","CM") +"<br>"
);

//10. Remove Extra Space:
let spacetext="CodeCraft  By     Maha";
document.write(spacetext.trim() +"<br>");


//11. Count Characters:
document.write(text.length +"<br>");

//12. Compare Two Strings:
let name1="Maha";
let name2="Majeed";
document.write(
    (name1===name2) + "<br>"
);

//13. Reverse a String:
let Reversedtext=text.split("").reverse().join("");
document.write(Reversedtext +"<br>");

//14. Replace Word in Sentence:
let Sentence="Allah bht bara Raheem he";
document.write(
    Sentence.replace("Allah","Allah Ta'ala") +"<br>"
);

//15. Check Two Strings are Equal:
let greeting1="Assalam O Alaikum";
let greeting2="Hello";
document.write((greeting1===greeting2) +"<br>"
);

//16. Mathametical Expressions:
let number1=29;
let number2=33;
document.write(number1+number2 +"<br>");
document.write(number1-number2 +"<br>");
document.write(number1*number2 +"<br>");
document.write(number1/number2 +"<br>");
document.write(number1/number2*100 +"<br>");
