//task 1
let originalBill = 1000;
let bill = originalBill;

// Increase the bill by 200
bill += 200;

// Apply a discount by dividing by 2
bill /= 2;

// Calculate the difference
let difference = originalBill - bill;

// Display the results
console.log("Original Bill: " , originalBill);
console.log("Final Bill: " , bill);
console.log("Difference: " , difference);
//task 2
console.log("----- Access Control System -----");

let age = 20;
let membership = "premium";

// Check access conditions
let hasAccess = (age >= 18 && membership === "premium") || age >= 25;

// Print the final decision
if (hasAccess) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}
//task 3
console.log("----- Bitwise Permission Processing -----");

let permission1 = 5;
let permission2 = 3;

// Bitwise operations
let commonPermissions = permission1 & permission2;
let combinedPermissions = permission1 | permission2;
let differingPermissions = permission1 ^ permission2;

// Print results
console.log("Permission 1: " , permission1);
console.log("Permission 2: " , permission2);
console.log("Common Permissions (AND): " + commonPermissions);
console.log("Combined Permissions (OR): " + combinedPermissions);
console.log("Differing Permissions (XOR): " + differingPermissions);
//task 4
console.log("----- Smart Login System -----");

let correctUsername = "admin";
let correctPassword = "12345";

let username = "admin";
let password = "12345";

let invalidAttempts = 0;
let accountLocked = false;

// Simulate three invalid login attempts
for (let i = 1; i <= 3; i++) {
    username = "wrongUser";
    password = "wrongPass";

    let loginValid =
        username === correctUsername &&
        password === correctPassword;

    if (!loginValid) {
        invalidAttempts++;
    }
}

// Lock account after 3 invalid attempts
if (invalidAttempts >= 3 && !accountLocked) {
    accountLocked = true;
}

// Ternary operator for final decision
let message = accountLocked
    ? "Account Locked"
    : (username === correctUsername &&
       password === correctPassword)
        ? "Login Successful"
        : "Login Failed";

console.log("Invalid Attempts: " + invalidAttempts);
console.log("Account Locked: " + accountLocked);
console.log(message);
//task 5
console.log("----- Safe Data Extraction -----");

let student = {
    name: "Ali",
    address: {
        city: "Abbottabad"
    },
    marks: {
        math: 85
    },
    guardian: {
        phone: null
    }
};

// Access values using optional chaining
let city = student?.address?.city ?? "Not Available";
let mathScore = student?.marks?.math ?? "Not Available";
let guardianPhone = student?.guardian?.phone ?? "Not Available";

// Display the results
console.log("City: " , city);
console.log("Math Score: " , mathScore);
console.log("Guardian Phone: " , guardianPhone);

function task6() {
console.log("----- Complex Unary Operation Tracker -----");

let onlineUsers = 10;

// Pre-increment
let step1 = ++onlineUsers;
console.log("After Pre-Increment: " , step1);

// Post-increment
let step2 = onlineUsers++;
console.log("After Post-Increment: " , step2);
console.log("Current Online Users: " , onlineUsers);

// Post-decrement
let step3 = onlineUsers--;
console.log("After Post-Decrement: " , step3);
console.log("Final Online Users: " , onlineUsers);
}
//task 7
console.log("----- Mixed String, Arithmetic & Assignment -----");

let firstName = "Ali";
let lastName = "Khan";

// Combine first and last name
let fullName = firstName + " " + lastName;

// Convert age string into number
//  age = "20";
age = +age;

// Increase age by 5
age += 5;

// Display the result
console.log("Full Name: " , fullName);
console.log("New Age: " , age);

console.log("After 5 years, " + fullName + " will be " + age + " years old.");

//task 8
console.log("----- Object Relation Check -----");

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

// Create two vehicle objects
let vehicle1 = new Car("Toyota", "Corolla");

let vehicle2 = {
    brand: "Honda",
    model: "Civic"
};

// Check model property using in
console.log("Vehicle 1 has model: " , "model" in vehicle1);
console.log("Vehicle 2 has model: " , "model" in vehicle2);

// Check instance using instanceof
console.log("Vehicle 1 is instance of Car: " , vehicle1 instanceof Car);
console.log("Vehicle 2 is instance of Car: " , vehicle2 instanceof Car);

//task 9
console.log("----- BigInt Financial Calculator -----");

// Store huge transaction amounts
let amount1 = 12345678901234567890n;
let amount2 = 98765432109876543210n;

// Calculate total, difference and multiplication
let total = amount1 + amount2;
difference = amount2 - amount1;
let multiplication = amount1 * amount2;

// Display results
console.log("Amount 1: " , amount1);
console.log("Amount 2: " , amount2);
console.log("Total: " , total);
console.log("Difference: " , difference);
console.log("Multiplication: " , multiplication);

//task 10
console.log("----- Sequential Comma Operator Evaluation -----");

// Declare variables
let a, b, c;

// Use comma operator to assign and calculate result
let result = (
    a = 10,
    b = 20,
    c = 30,
    a + b + c
);

// Print only final evaluated value
console.log(result);
