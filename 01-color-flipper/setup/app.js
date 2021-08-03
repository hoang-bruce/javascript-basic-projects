// Available colors to use.
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue", "magenta", "pink", "purple", "orange"];

// The button
const btn = document.getElementById('btn');

// The color
const color = document.querySelector('.color');

// When the button is clicked, change the background color, and show the color/hex.
btn.addEventListener('click', function() {
    // get random number between 0 - 3 colors[0]

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}