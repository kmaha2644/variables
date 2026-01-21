var n=prompt("enter your name");

var question=prompt("kia aj chutti he");
if (question==="yes"){
    document.write("enjoy");
}

else{
    (question==="no")
    document.write("thak gai hun");
}


var num=prompt("enter any num");
var num2=prompt("enter second num");
var sum=num+num2;
document.write("your answer is: "+sum);

var num=+prompt("enter any num");
var num2=+prompt("enter second num");
var sum=num+num2;
document.write("your answer is: "+sum);


var num=+prompt("enter any num");
var num2=+prompt("enter second num");
var sum=num+num2;
var opp=prompt("enter any operator");
if(opp==="+"){
    document.write(num1+num2);
}

else if(opp==="-"){
    document.write(num1-num2);
}

else if(opp==="*"){
    document.write(num1*num2);
}

else if(opp==="/"){
    document.write(num1/num2);
}

else if(opp==="%"){
    document.write(num1/num2*100);
}

else{
    document.write("your operator is ill");
}
