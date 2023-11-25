const registerForm = document.getElementById("registerForm")

function getDateFormForm(){
    const enteryourname = document.getElementById("enter your name").value;
    const enteryouremail = document.getElementById("enter your email").value;
    const yourmessage = document.getElementById("your message").value;
    console.log(enteryourname, enteryouremail, yourmessage);
    

    alert("Enter Your Name:" + enteryourname + "\nEnter Your Email: " + enteryouremail + "Your Message:" + yourmessage);
}

registerForm.addEventListener("submit", getDateFormForm);