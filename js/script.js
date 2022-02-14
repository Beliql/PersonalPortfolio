/**
 * Hamburger Menu Var Declaration
 */
const hamburger = document.getElementById("hamburger"),
    navUL = document.getElementById("navigation-mobile"),
    mobileButtons = [document.getElementById("mobileButtonWork"), document.getElementById("mobileButtonSkills"), document.getElementById("mobileButtonContact")];

/**
 * [Hamburger Menu]
 */
hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show'); //show menu on button click
});

for (let button of mobileButtons) {
    button.addEventListener('click', () => {
        navUL.classList.toggle('show'); //Hide menu after option has been selected 
    });
}

/**
 * Icosahedron Var Declaration
 */
const leftTrigger = document.getElementById("left-trigger"),
      rightIcon = document.getElementById("icon-right"),
      leftIcon = document.getElementById("icon-left"),
      rightTrigger = document.getElementById("right-trigger");

/**
 * Check for hover
 */
leftTrigger.addEventListener('mouseover', () => {
    leftIcon.classList.toggle('is-hovered');
})

leftTrigger.addEventListener('mouseout', () => {
    leftIcon.classList.toggle('is-hovered');
})

rightTrigger.addEventListener('mouseover', () => {
    rightIcon.classList.toggle('is-hovered');
})

rightTrigger.addEventListener('mouseout', () => {
    rightIcon.classList.toggle('is-hovered');
})

/**
 * Return to top button Var Declaration
 */
const returnToTop = document.getElementById("returnToTop");

let myScrollFunc = function () {
    let currentScrollLocation = window.scrollY;
    if (currentScrollLocation >= 150) {
        returnToTop.className = "scroll-to-top-button show" // Show button
    } else {
        returnToTop.className = "scroll-to-top-button hide" // Hide button
    }
};

window.addEventListener("scroll", myScrollFunc); //Call the scroll function to display return to top button

/**
 * Randomize Images Var Declaration
 */
const images = [
    "images/svgs/Contact1-kurz.svg",
    "images/svgs/Contact2-kurz.svg",
    "images/svgs/Contact3-kurz.svg"
]; //Array of images to randomize

/**
 * [Randomize on page refresh Function]
 */
function randomizeContactImage() {
    let imageCount = images.length;
    let chosenImage = Math.floor(imageCount * Math.random());
    document.getElementById("contact-image").src = images[chosenImage];
}

window.onload = randomizeContactImage(); //Call randomizer


/**
 * [Form Submission Function]
 */
function submitFunction() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    // Validation
    if (email !== '') {
        if (email.indexOf('@') > -1) {
            if (name !== '') {
                if (message !== '') {
                    alert(`Sorry ${name} this section is still under development`);
                    document.getElementById('email').value = "";
                    document.getElementById('name').value = "";
                    document.getElementById('message').value = "";
                } else {
                    alert("Please enter your message");
                }
            } else {
                alert("Please enter your name");
            }
        } else {
            alert("Please enter a valid email");
        }
    } else {
        alert("Please enter your email");
    }
}