
// ================= TASK 1 =================
function task1() {
    console.log("----- Convert Input Types -----");

    // Take input from user
    let value = prompt("Enter any value:");

    // Convert values
    let numberValue = Number(value);
    let stringValue = String(value);
    let booleanValue = Boolean(value);

    // Display results
    console.log("Original Value: ", value);
    console.log("Number Conversion: ", numberValue);
    console.log("String Conversion: ", stringValue);
    console.log("Boolean Conversion: ", booleanValue);

    console.log("Original Type: ", typeof value);
    console.log("Number Type: ", typeof numberValue);
    console.log("String Type: ", typeof stringValue);
    console.log("Boolean Type: ", typeof booleanValue);

    // Type coercion
    console.log("Coercion Result: ", value + 10);

    document.getElementById("result").innerHTML =
        "<h3>Task 1 - Type Conversion</h3>" +
        "<p>Original Value: " + value + "</p>" +
        "<p>Number: " + numberValue + "</p>" +
        "<p>String: " + stringValue + "</p>" +
        "<p>Boolean: " + booleanValue + "</p>" +
        "<p>Coercion: " + (value + 10) + "</p>";
}


// ================= TASK 2 =================
function task2() {
    console.log("----- Calculator With Explicit Conversion -----");

    // Take two inputs
    let input1 = prompt("Enter first number:");
    let input2 = prompt("Enter second number:");

    // Convert into numbers
    let num1 = Number(input1);
    let num2 = Number(input2);

    // Perform calculations
    let addition = num1 + num2;
    let subtraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

    // Display results
    console.log("First Number: ", num1);
    console.log("Second Number: ", num2);
    console.log("Addition: ", addition);
    console.log("Subtraction: ", subtraction);
    console.log("Multiplication: ", multiplication);
    console.log("Division: ", division);

    document.getElementById("result").innerHTML =
        "<h3>Task 2 - Calculator</h3>" +
        "<p>Addition: " + addition + "</p>" +
        "<p>Subtraction: " + subtraction + "</p>" +
        "<p>Multiplication: " + multiplication + "</p>" +
        "<p>Division: " + division + "</p>";
}


// ================= TASK 3 =================
function task3() {
    console.log("----- Global vs Local Scope -----");

    // Global variable
    let globalVariable = "I am Global";

    // Function with local variable
    function showScope() {
        let localVariable = "I am Local";

        console.log("Global Variable: ", globalVariable);
        console.log("Local Variable: ", localVariable);
    }

    showScope();

    // Block scope
    {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside Block:");
        console.log("var: ", a);
        console.log("let: ", b);
        console.log("const: ", c);
    }

    // Access outside block
    console.log("Outside Block:");
    console.log("var: ", a);

    try {
        console.log("let: ", b);
    } catch (error) {
        console.log("let is not accessible outside block");
    }

    try {
        console.log("const: ", c);
    } catch (error) {
        console.log("const is not accessible outside block");
    }

    // Nested functions
    function outerFunction() {
        let message = "Hello from Outer Function";

        function innerFunction() {
            console.log("Inner Function: ", message);
        }

        innerFunction();
    }

    outerFunction();

    document.getElementById("result").innerHTML =
        "<h3>Task 3 - Global vs Local Scope</h3>" +
        "<p>Global Variable: " + globalVariable + "</p>" +
        "<p>Local Variable: Accessible inside function</p>" +
        "<p>var: " + a + "</p>" +
        "<p>let and const: Not accessible outside block</p>" +
        "<p>Lexical Scope: Hello from Outer Function</p>";
}


// ================= TASK 4 =================
function task4() {
    console.log("----- Default Parameter Greeting -----");

    // Function with default parameter
    function greeting(name = "Guest") {
        return "Hello, " + name + "! Welcome.";
    }

    // Take input
    let userName = prompt("Enter your name:");

    // Display greeting
    let message;

    if (userName === null || userName.trim() === "") {
        message = greeting();
    } else {
        message = greeting(userName);
    }

    console.log(message);

    document.getElementById("result").innerHTML =
        "<h3>Task 4 - Greeting</h3>" +
        "<p>" + message + "</p>";
}


// ================= TASK 5 =================
function task5() {
    console.log("----- Function Returning Value (Add to Cart) -----");

    // Take inputs
    let quantity = Number(prompt("Enter product quantity:"));
    let price = Number(prompt("Enter product price:"));

    // Function to calculate total
    function calculateTotal(qty, price) {
        let total = qty * price;
        return total;
    }

    // Call function
    let result = calculateTotal(quantity, price);

    // Display results
    console.log("Quantity: ", quantity);
    console.log("Price: ", price);
    console.log("Total Amount: ", result);

    document.getElementById("result").innerHTML =
        "<h3>Task 5 - Add to Cart</h3>" +
        "<p>Quantity: " + quantity + "</p>" +
        "<p>Price: " + price + "</p>" +
        "<h3>Total Amount: " + result + "</h3>";
}


// ================= TASK 6 =================
function evaluateStudent() {
    console.log("----- Multi-Step Grade & Status Evaluator -----");

    // Take input
    let marks = Number(prompt("Enter your marks:"));
    let attendance = Number(prompt("Enter attendance percentage:"));
    let behavior = prompt("Enter behavior (Good/Medium/Poor)");

    if (behavior === null) {
        behavior = "";
    }

    // Calculate grade using if else
    let grade;

    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Remark using switch
    let remark;

    switch (behavior.toLowerCase()) {
        case "good":
            remark = "Excellent Behavior";
            break;

        case "medium":
            remark = "Average Behavior";
            break;

        case "poor":
            remark = "Needs Improvement";
            break;

        default:
            remark = "Invalid Behavior";
    }

    // Pass or fail using ternary
    let status = (marks >= 50 && attendance >= 75)
        ? "Pass"
        : "Fail";

    // Display results
    console.log("Marks: ", marks);
    console.log("Attendance: ", attendance + "%");
    console.log("Grade: ", grade);
    console.log("Behavior: ", remark);
    console.log("Final Status: ", status);

    document.getElementById("result").innerHTML =
        "<h3>Task 6 - Student Summary Card</h3>" +
        "<p>Marks: " + marks + "</p>" +
        "<p>Attendance: " + attendance + "%</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p>Behavior: " + remark + "</p>" +
        "<h3>Status: " + status + "</h3>";
}


// ================= TASK 7 =================
function mainFunction() {
    console.log("----- Online Store Cart -----");

    // Function expression to calculate subtotal
    const calculateSubtotal = function(quantity, price) {
        return quantity * price;
    };

    // Function expression to apply discount
    const applyDiscount = function(subtotal) {
        if (subtotal >= 5000) {
            return subtotal * 0.10;
        } else {
            return 0;
        }
    };

    // Function expression to calculate tax
    const calculateTax = function(amount) {
        return amount * 0.05;
    };

    // Take input
    let productName = prompt("Enter product name:");

    if (productName === null || productName.trim() === "") {
        productName = "Unknown Product";
    }

    let quantity = Number(prompt("Enter quantity:"));
    let price = Number(prompt("Enter price per item:"));

    // Calculate subtotal
    let subtotal = calculateSubtotal(quantity, price);

    // Calculate discount
    let discount = applyDiscount(subtotal);

    // Calculate amount after discount
    let discountedAmount = subtotal - discount;

    // Calculate tax
    let tax = calculateTax(discountedAmount);

    // Calculate final total
    let finalTotal = discountedAmount + tax;

    // Display results
    console.log("Product Name: ", productName);
    console.log("Quantity: ", quantity);
    console.log("Price: ", price);
    console.log("Subtotal: ", subtotal);
    console.log("Discount Applied: ", discount);
    console.log("Tax Amount: ", tax);
    console.log("Final Total: ", finalTotal);

    document.getElementById("result").innerHTML =
        "<h3>Task 7 - Shopping Cart Summary</h3>" +
        "<p>Product Name: " + productName + "</p>" +
        "<p>Quantity: " + quantity + "</p>" +
        "<p>Price Per Item: " + price + "</p>" +
        "<p>Subtotal: " + subtotal + "</p>" +
        "<p>Discount Applied: " + discount + "</p>" +
        "<p>Tax Amount: " + tax + "</p>" +
        "<h3>Final Total: " + finalTotal + "</h3>";
}
