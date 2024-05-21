
let integ1 = prompt("Enter a integer 1 to display the larger");
let integ2 = prompt("Enter a integer 2 to display the larger");
if(integ1 > integ2){
    document.write("Your integer one is larger than integer two");
}else if(integ1 == integ2){
    document.write("Your integer one is equal to integer two");
}else if(integ1 < integ2){
    document.write("Your integer two is larger than integer one");
}else if("" == ""){
    document.write("Please Enter a Valid Number");
}else{
    document.write("Please Enter a Valid Number");
}



// 2
let vowels = prompt("Enter a correct vowels");
if(vowels == "a"){
    document.write("The " + vowels + " is vowels");
}else if(vowels == "e"){ 
    document.write("The " + vowels + " is vowels");
}else if(vowels == "i"){
    document.write("The " + vowels + " is vowels");
}else if(vowels == "o"){
    document.write("The " + vowels + " is vowels");
}else if(vowels == "u"){
    document.write("The " + vowels + " is vowels");
}else{
    document.write("The " + vowels + " consonant");
}


3
let time = prompt("Enter a time in 24 hour format");
if (time >= 0 & time <= 12) {
    document.write("Good Morning");
}
else if(time >= 13 & time <= 18){
    document.write("Good Afternoon");
}
else{
    document.write("You Have a Good Night");
}

// 4
let userNumber = prompt("Enter a number that check the number is zero postive or negative");
if(userNumber == 0){
    document.write("The number is zero");
}else if(userNumber > 1){
    document.write("The number is positive");
}else{
    document.write("The number is negative");
}