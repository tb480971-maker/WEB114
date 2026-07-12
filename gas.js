// Name: [Tiana Bui], Date: July 11, 2026

// GLOBAL VARIABLES
// 1. Declare a variable for the count for the entries and reset it.
let entryCount = 0;
// 2. Declare a variable for the total Gas.
let gasTotal = 0;

// MAIN PROGRAM
// 3. Prompt user: "Enter your name:" → store in username
let username = prompt("Enter your name:");

// 4. If username is null → alert "You cancelled the name prompt." and stop
if (username === null) {
    alert("You cancelled the name prompt.");
} 
// 5. If username is empty (after trim) → alert "You must type a name." and stop
else if (username.trim() === "") {
    alert("You must type a name.");
} 
else {
    // 6. Call calcGasAvg() → returns average or null if cancelled
    // 3. Use an else that use a variable average = run the CalcGasAvg function.
    let average = calcGasAvg();

    // 7. If calcGasAvg() returned null → alert "You cancelled entering gas totals." and stop
    if (average === null) {
        alert("You cancelled entering gas totals.");
    } 
    // 8. Otherwise:
    else {
        // 4. Validate input for gas totals with an if statement and Use alert() to display a message
        // a. If entryCount === 0 → alert "No gas totals were entered."
        if (entryCount === 0) {
            alert("No gas totals were entered.");
        } 
        // b. Else:
        else {
            let message = "";
            // - If entryCount === 1 → message = the username and gas total with 2 decimal places.
            if (entryCount === 1) {
                message = username + "'s gas total is $" + gasTotal.toFixed(2) + ".";
            } 
            // - Else → message = username and the average gas bill with 2 decimal places
            else {
                message = username + "'s average weekly gas bill is $" + average.toFixed(2) + ".";
            }
            // - Show message with alert()
            alert(message);
        }

        // c. Then show entry message count:
        // 5. Create a variable name entryMessage and use an if statement to display how many gas totals they entered.
        let entryMessage = "";
        // - If entryCount == 0 - show "No gas totals were entered."
        if (entryCount === 0) {
            entryMessage = "No gas totals were entered.";
        } 
        // - Else if entryCount == 1 - show 1 entry was entered.
        else if (entryCount === 1) {
            entryMessage = "You entered 1 gas total.";
        } 
        // - Else → show the number of entries total
        else {
            entryMessage = "You entered " + entryCount + " gas totals.";
        }
        // - Show message with alert()
        alert(entryMessage);
    }
}

// FUNCTION: calcGasAvg()
function calcGasAvg() {
    // Create a variable called input that will be used in the function.
    let input;
    let weeklyGas;

    // 9. Prompts for the first gas total
    input = prompt("Enter your first week's gas total. Enter -1 when you are done.");

    // 10. Validates input with isNaN() / If user clicks Cancel → return null
    if (input === null) {
        return null;
    }

    // 11. The input is now a string? How do you fix that? Convert to Float.
    weeklyGas = parseFloat(input);

    // 12. Use a while (weeklyGas !== -1) loop.
    while (weeklyGas !== -1) {
        // a. Validates input validation-- did they enter a word or a number?
        if (isNaN(weeklyGas)) {
            alert("Please enter a valid number.");
            // Ask again for same entry
            input = prompt("Enter your first week's gas total. Enter -1 when you are done.");
            if (input === null) {
                return null;
            }
            weeklyGas = parseFloat(input);
            continue; // Continue loop to evaluate the new input
        } 
        // b. Else:
        else {
            // F. Add the number to the total and increment entryCount for each entry.
            gasTotal += weeklyGas;
            entryCount++;

            // G. Ask the user for any other week's gas totals using a prompt.
            input = prompt("Enter your next week's gas total. Enter -1 when you are done.");
            
            // Validate if they hit the cancel button, If the input is null then return null.
            if (input === null) {
                return null;
            }
            
            // Lastly, convert the result to a Float.
            weeklyGas = parseFloat(input);
        }
    }

    // 13. After loop processing:
    let calculatedAverage;
    if (entryCount > 0) {
        calculatedAverage = gasTotal / entryCount;
    } else {
        calculatedAverage = 0;
    }
    
    return calculatedAverage;
}