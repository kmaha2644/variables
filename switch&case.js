//Console:

let letter=prompt("Enter a Letter").toLowerCase();
switch (letter) {
case "a":
case "e":
case "i":
case "o":
case "u":

console.log("It is a vowel");
break;

default:
    console.log("It is a consonant");
}


//Document.Write:

let letter=prompt("Enter a Letter").toLowerCase();
switch (letter) {
case "a":
case "e":
case "i":
case "o":
case "u":

document.write("It is a vowel");
break;

default:
    document.write("It is a consonant");
}

//Console:

let num=prompt("Enter a Number");
switch (num % 2) {
    case 0:
        console.log("Number is Even");
        break;

        case 1:
            console.log("Number is Odd");
            break;

            default:
                console.log("Invalid Input");
}


//Document.Write:

let num=prompt("Enter a Number");
switch (num % 2) {
    case 0:
        document.write("Number is Even");
        break;

        case 1:
            document.write("Number is Odd");
            break;

            default:
                document.write("Invalid Input");
}


//Console:

let month=prompt("Enter month name").toLowerCase();
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july": 
    case "august":
    case "october":
    case "december":  
      console.log("This month has 31 days")    ;
    break;

    case "april":
    case "june":
    case "september":
    case "november":  
      console.log("This month has 30 days");
    break;

    case "february":
       console.log("This month has 28 or 29 day");
    break;

    default:
        console.log("Invalid month Name");
}


//Document.Write:

let month=prompt("Enter month name").toLowerCase();
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july": 
    case "august":
    case "october":
    case "december":  
      document.write("This month has 31 days")    ;
    break;

    case "april":
    case "june":
    case "september":
    case "november":  
      document.write("This month has 30 days");
    break;

    case "february":
       document.write("This month has 28 or 29 day");
    break;

    default:
        document.write("Invalid month Name");
}
