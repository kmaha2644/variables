//Print Table Of 2:

document.write("<b>1. Table of 2:</b><br><br>");
for (let i=1; i<=10; i++) {
    document.write("2x" + i + "=" +(2* i) + "<br><br>");
}

//Print String Characters:

document.write("<b>2. String Cherecters:</b><br><br>");
let name= "CodeCraft By Maha";
for (let i = 0; i < name.length; i++) {
    document.write(name[i] + "<br>");
}

//Find Largest Number [Array se]:

document.write("<b>3. Largest Number:</b><br><br>");
let numbers = [10, 45, 23, 89, 67];
let largest = numbers [0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest= numbers[i];
    }
}

document.write("Largest Number is:", largest);
