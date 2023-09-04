
// Listening with Event handler properties
const helpButton = document.getElementById('help-button');

function displayHelpWindow(){
    alert('help button clicked');
}

helpButton.onclick = displayHelpWindow;

// Using addEventListener()

//EventTarget.addEventListener('event', callback, options);

const submitButton = document.getElementById('submit')

function handleSubmit(){
    alert('submit handeled');
}

submitButton.addEventListener('click' , handleSubmit);


