
"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0, totalQuestions = 4

2. Question 1: What is my favorite pet animal?
   - Variable name: favoritePetInput
   - Correct answer: "cat"
   - How I'll validate and check: Ensure input is not empty/null using && and .trim(). Convert to lowercase. Check if strictly equals "cat". If correct, increment score.

3. Question 2: How many times do i workout per week?
   - Variable name: workoutCountInput
   - Correct answer: 5 or 6 (accepting either)
   - How I'll validate and check: Ensure input is not empty. Use ParseInt to check the number, or compare lowercase text string. Use || logical operator to accept "5" or "6" or "five" or "six".

4. Question 3: What is my absolute favorite beverage/coffee drink?
   - Variable name: favoriteDrinkInput
   - Correct answer: "latte"
   - How I'll validate and check: Standard empty validation. Convert to lowercase. Check if strictly equals "latte".

5. Question 4: True or False: What is my favorite color?
   - Variable name: favoriteColorInput
   - Correct answer: "pastel purple"
   - How I'll validate and check: Standard validation. Convert to lowercase. Check if it matches "pastel purple".

6. Math: How will I calculate the percentage? 
   - formula: (score / totalQuestions) * 100

7. Final feedback logic (if / else if / else):
   - If score is 4: Perfect score alert.
   - Else if score is 3: Great job alert.
   - Else if score is 2: Decent effort alert.
   - Else: Need to get to know me better alert.

Logical operators I will use:
- && for validating that input exists AND is not just blank spaces.
- || for allowing multiple correct variations in Question 2 ("1" || "one").
- ! for checking if a condition is not met where needed.
*/

console.log("=== My Quiz Game ===");

// Step 1: Initialize score tracking variables
let userScore = 0;
const totalQuestions = 4;

// Step 2: Question 1 (Hobbies / Favorites)
let favoritePetInput = prompt("Question 1: What is my absolute favorite pet animal?");

// Input Validation
if (favoritePetInput && favoritePetInput.trim() !== "") {
    // Process input by removing whitespace and transforming to lowercase to handle case sensitivity
    let cleanPetAnswer = favoritePetInput.trim().toLowerCase();
    
    // Comparison operation
    if (cleanPetAnswer === "cat") {
        alert("Correct! Cats are definitely my favorite.");
        userScore++;
    } else {
        alert("Incorrect! Hint: They purr and sleep a lot.");
    }
} else {
    alert("You skipped or left the answer blank! No points awarded.");
}

// Step 3: Question 2 (Goals / Career)
let videoCountInput = prompt("Question 2: How many videos do I want to upload per week on my channel? (1 or 2?)");

// Input Validation using logical AND (&&) and NOT (!)
if (videoCountInput && !videoCountInput.trim() === "") {
    alert("Blank input detected!");
} else if (videoCountInput) {
    let cleanVideoAnswer = videoCountInput.trim().toLowerCase();
    
    // Comparison using logical OR (||) to accept multiple forms of the correct answers
    if (cleanVideoAnswer === "1" || cleanVideoAnswer === "one" || cleanVideoAnswer === "2" || cleanVideoAnswer === "two") {
        alert("Spot on! I aim for a manageable 1 to 2 videos a week.");
        userScore++;
    } else {
        alert("Nope, that's either too many or too few for my schedule!");
    }
} else {
    alert("No answer provided.");
}

// Step 4: Question 3 (Favorites)
let favoriteDrinkInput = prompt("Question 3: What espresso-and-milk beverage do I order most often?");

// Input Validation
if (favoriteDrinkInput && favoriteDrinkInput.trim() !== "") {
    let cleanDrinkAnswer = favoriteDrinkInput.trim().toLowerCase();
    
    if (cleanDrinkAnswer === "latte") {
        alert("Correct! A smooth latte is my go-to choice.");
        userScore++;
    } else {
        alert("Wrong answer. Think classic milk and espresso balance.");
    }
} else {
    alert("Skipped question. Moving on!");
}

// Step 5: Question 4 (Style / Preferences)
let aestheticStyleInput = prompt("Question 4: True or False: My visual style preference is minimalist and low-key?");

// Input Validation
if (aestheticStyleInput && aestheticStyleInput.trim() !== "") {
    let cleanAestheticAnswer = aestheticStyleInput.trim().toLowerCase();
    
    if (cleanAestheticAnswer === "true" || cleanAestheticAnswer === "t") {
        alert("Exactly! I prefer things blunt, short, and minimal.");
        userScore++;
    } else {
        alert("Incorrect. I definitely prefer a low-key, clean look over heavy complexity.");
    }
} else {
    alert("Answer left blank.");
}

// Step 6: Calculate final score percentage using basic math operators
let finalPercentage = (userScore / totalQuestions) * 100;

// Step 7: Final feedback using conditional structure (if / else if / else)
let feedbackMessage = "";

if (userScore === 4) {
    feedbackMessage = "Wow, you know me perfectly! 100% accuracy.";
} else if (userScore === 3) {
    feedbackMessage = "Great job! You got most of them right.";
} else if (userScore === 2) {
    feedbackMessage = "Not bad, you got half of them right.";
} else {
    feedbackMessage = "Looks like we should chat more! You scored less than half correct.";
}

// Final summary alert rendering the aggregated stats
alert(
    "=== Quiz Summary ===\n" +
    "Correct Answers: " + userScore + " out of " + totalQuestions + "\n" +
    "Final Score: " + finalPercentage + "%\n\n" +
    feedbackMessage
);