/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Arrays for random words
var nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var secondNouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
// Variable to store the text to speak
var textToSpeak = '';
// Buttons
var nounButton = document.getElementById('nounButton');
var verbButton = document.getElementById('verbButton');
var adjButton = document.getElementById('adjButton');
var noun2Button = document.getElementById('noun2Button');
var placeButton = document.getElementById('placeButton');
var speakButton = document.getElementById('speakButton');
var storyButton = document.getElementById('storyButton');
var resetButton = document.getElementById('resetButton');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomStory() {
    textToSpeak = getRandomWord(nouns) + ' ' + 
                  getRandomWord(verbs) + ' ' + 
                  getRandomWord(adjectives) + ' ' + 
                  getRandomWord(secondNouns) + ' ' + 
                  getRandomWord(places) + '.';
    speakNow(textToSpeak);
}

/* Event Listeners
-------------------------------------------------- */
nounButton.onclick = function() {
    textToSpeak += getRandomWord(nouns) + ' ';
}

verbButton.onclick = function() {
    textToSpeak += getRandomWord(verbs) + ' ';
}

adjButton.onclick = function() {
    textToSpeak += getRandomWord(adjectives) + ' ';
}

noun2Button.onclick = function() {
    textToSpeak += getRandomWord(secondNouns) + ' ';
}

placeButton.onclick = function() {
    textToSpeak += getRandomWord(places) + ' ';
}

// Onclick handler for the button that speaks the text contained in the textToSpeak variable
speakButton.onclick = function() {
    speakNow(textToSpeak);
}

// Onclick handler for the button that generates a random story
storyButton.onclick = function() {
    generateRandomStory();
}

// Onclick handler for the reset button
resetButton.onclick = function() {
    textToSpeak = '';
    alert("Story reset. You can start creating a new one!");
}
