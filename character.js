"use strict";

//setting: a floating sky city

alert(`Welcome to the adventure! I am Tiana, your guide through a floating sky city. Let's create your hero!`);

const CharName = prompt(`What is your character's name?`, `Wanderer`);
const companionType = prompt(`What type of pet or companion does ${CharName} have?`);
const supePower = prompt(`What superpower does ${CharName} have?`);
const traningYearsText = prompt(`How many years has ${CharName} been training?`);
const trainingYears = Number(traningYearsText);
console.log(trainingYearsraningYearsText, typeof traningYearsText);
console.log(trainingYears, typeof trainingYears);
const powerLevel = trainingYears * 10; 
const likesFighting = confirm(`Does ${CharName} like fighting monsters?\nClick Ok for YES Click Cancel for NO`);
console.log(likesFighting), typeof likesFighting;

alert(`Gathering magic for ${CharName}... almost ready!`);
alert(`====================================
        CHARACTER DOSSIER
====================================
Name: ${charName}
Pet: ${companionType}
Superpower: ${superPower}
Power Level: ${powerLevel}
Monster fighter? ${likesFighting ? "Yes" : "No"}
====================================

High above the clouds in A floating sky city, ${charName} leaps between the platforms alongside a trusty ${companionType}. Together, they safeguard the skies using the incredible power of ${superPower}!

====================================`);