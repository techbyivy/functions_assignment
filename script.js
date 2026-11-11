function square(number){
    return number* number;  }

    function cube(number){
        return number*number*number
    }

    function isEven (number) {
        return number %2===0
    }

function calculatePercentage(value, total) {
    return (value / total) * 100;
}

let choice = prompt("Which function would you like to test?\n1. square\n2. cube\n3. isEven\n4. calculatePercentage");

if (choice === "1") {
    let num = Number(prompt("Enter a number to square:"));
    console.log("Square result: " + square(num));
} 
else if (choice === "2") {
    let num = Number(prompt("Enter a number to cube:"));
    console.log("Cube result: " + cube(num));
} 
else if (choice === "3") {
    let num = Number(prompt("Enter a number to check if even:"));
    console.log("Is even? " + isEven(num));
} 
else if (choice === "4") {
    let val = Number(prompt("Enter the value:"));
    let tot = Number(prompt("Enter the total:"));
    console.log("Percentage result: " + calculatePercentage(val, tot) + "%");
} 
else {
    console.log("Invalid choice!");
}
