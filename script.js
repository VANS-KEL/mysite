const text = document.getElementById("dynamic-text");

const messages = [
    "Welcome to my dynamic website.",
    "This website was built using HTML, CSS and JavaScript.",
    "Passionate about cybersecurity and web development.",
];

let index = 0;

function changeText() {

    text.textContent = messages[index];

    index++;

    if(index >= messages.length){
        index = 0;
    }
}

setInterval(changeText, 2000);

changeText();