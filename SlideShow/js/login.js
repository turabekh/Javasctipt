function myvalidate(){

    emails = ["turabekh@gmail.com", "zebo@gmail.com", "sofia@gmail.com"];
    passwords = {"turabekh@gmail.com": "mypassword", "zebo@gmail.com": "secret", "sofia@gmail.com": "1234"}
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (email.value == "" || password.value == "")
    {
        alert("Please fill in the form with valid data");
        email.style.borderColor = "red";
        password.style.borderColor = "red";
        return false;
    }
    else if (!emails.includes(email.value))
    {
        alert("Email does not exist. Please enter a valid email");
        email.style.borderColor = "red";
        return false;
    }
    else if (password.value !== passwords[email.value])
    {
        alert("password invalid");
        password.style.borderColor = "red";
        return false;
    }
    else 
    {
        return true;
    }

}


function change()
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    email.style.borderColor ="grey";
    password.style.borderColor = "grey";
}