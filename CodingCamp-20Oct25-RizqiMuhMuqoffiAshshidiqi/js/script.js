welcomeSpeech();

function welcomeSpeech() {
    //Show prompt dialog to ask user's name
    let name = prompt("Enter your name:");

    //Greet the user by name
    document.getElementById("greet-name").innerHTML = `Hi, ${name}! `;
}

//function to validate form inputs
function validateForm() {
    //Get Form Input Values
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const message = document.getElementById("message-input").value;
    //Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting the form.");    
    }
    //Show success message
    else {
        alert("Thank you for your message, " + name + "!");
    }
}