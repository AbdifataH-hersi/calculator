// Good Luck! You got this 💪🏾
// Write your code here.


 

function calculator(num1, num2, operator) {
    
    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else if (operator === "/") {
        
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Error: Division by zero is not allowed");
        }
    } else {
        console.log("Invalid operator");
    }
}



    
 