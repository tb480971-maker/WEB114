Tiana - July 1, 2026

// Ask the user for their favorite month, convert it to lowercase, and store it
let favMonth = prompt("What is your favorite month?").toLowerCase();

// Check the console to see the result
console.log("User input stored as:", favMonth);
switch (favMonth) {
    // Spring months
    case "march":
    case "april":
    case "may":
        console.log("Spring is nice with everything blooming.");
        break;

    // Summer months
    case "june":
    case "july":
    case "august":
        console.log("You enjoy the summer months!");
        break;

    // Fall months
    case "september":
    case "october":
    case "november":
        console.log("Fall is fun with all of the pretty colors.");
        break;

    // Winter months
    case "december":
    case "january":
    case "february":
        console.log("You love the winter months!");
        break;

    // Default case for typos or invalid months
    default:
        console.log("That doesn't look like a valid month. Make sure to check your spelling!");
}