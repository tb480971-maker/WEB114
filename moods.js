// Tiana - July 15,2026

// Select mood display element, buttons container, and each specific button
const currentMoodSpan = document.querySelector("#current-mood");
const displayMessage = document.querySelector("#display-message");

const happyBtn = document.querySelector("#happy-btn");
const calmBtn = document.querySelector("#calm-btn");
const angryBtn = document.querySelector("#angry-btn");
const sadBtn = document.querySelector("#sad-btn");
const randomBtn = document.querySelector("#random-btn");

// This object holds the configuration settings for each individual mood
const moods = {
    happy: {
        name: "Happy",
        bg: "#FFD700", // Vibrant gold/yellow
        text: "#bd26b0", // Warm magenta/purple
        message: "Warm smiles and the sun's kisses!"
    },
    calm: {
        name: "Calm",
        bg: "#A2D2FF", // Gentle sky blue
        text: "#003049", // Deep ocean navy
        message: "Take a breath. Let the waves of peace wash over you."
    },
    angry: {
        name: "Angry",
        bg: "#D62828", // Fire engine red
        text: "#FFE3E3", // Soft off-white red
        message: "Take a step back, count to ten, and let off some steam!"
    },
    sad: {
        name: "Sad",
        bg: "#4A90E2", // Gentle sky blue
        text: "#003049", // Deep ocean navy
        message: "It's okay to feel down. Take care of yourself."
    }
};

// ==========================================
function changeMood(moodName) {
    // Retrieve mood from configuration object
    const mood = moods[moodName];

    if (mood) {
        // Change background color
        document.body.style.backgroundColor = mood.bg;

        // Update the text color of the body
        document.body.style.color = mood.text;

        // Update the message text
        displayMessage.textContent = mood.message;

        // Change the title of the page to the Mood Name
        currentMoodSpan.textContent = mood.name;

        // CHALLENGE EXTENSION: Log mood changes in the console
        console.log("Mood selected:", moodName);
        console.log("Mood settings:", mood);
    }


}

// ==========================================
// Event handler functions direct which string argument to pass to changeMood()
function handleHappyClick() {
    changeMood("happy");
}

function handleCalmClick() {
    changeMood("calm");
}

function handleAngryClick() {
    changeMood("angry");
}

function handleSadClick() {
    changeMood("sad");
}


    // CHALLENGE EXTENSION: Random Mood Selector Handler
function handleRandomClick() {
    // Convert keys of our moods object into an array: ["happy", "calm", "angry", "sleepy"]
    const moodKeys = Object.keys(moods);
    
    // Choose a random key index
    const randomIndex = Math.floor(Math.random() * moodKeys.length);
    const randomMoodKey = moodKeys[randomIndex];
    
    // Call our core change function
    changeMood(randomMoodKey);
}

// ==========================================
// Connect our event handlers to target buttons
happyBtn.addEventListener("click", handleHappyClick);
calmBtn.addEventListener("click", handleCalmClick);
angryBtn.addEventListener("click", handleAngryClick);
sadBtn.addEventListener("click", handleSadClick);
randomBtn.addEventListener("click", handleRandomClick);