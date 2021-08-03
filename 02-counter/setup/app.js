// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// implement event lister for each button
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        // get the class name
        const styles = e.currentTarget.classList;

        // if the name matches "decrease", "increase" or "reset", act accordingly
        // decrease = count--
        // increase = count++
        // reset = count = 0
        if (styles.contains("decrease")){
            count--;
        } else if (styles.contains("increase")){
            count++;
        } else if (styles.contains("reset")){
            count = 0;
        }
        if (count > 0){
            value.style.color = 'green';
        } else if (count < 0){
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})

