var loginButton = document.getElementById("loginButton");
var signupButton = document.getElementById("signupButton");

function NewUser(email, password) {
    this.email = email;
    this.password = password;
}

loginButton.addEventListener("click", function () {
    var stringGotten = window.localStorage.getItem("user");
    var userData = JSON.parse(stringGotten);
    var userEmail = userData.email;
    var userPassword = userData.password;
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    if (email === userEmail && password === userPassword) {
        window.location.href = "work.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

signupButton.addEventListener("click", function () {
    var stringGotten = window.localStorage.getItem("user");
    var userData = JSON.parse(stringGotten);
    var userEmail = userData.email;
    var email = document.getElementById("emailInput").value;
    if (userEmail === email){
        alert("Username already exists");
        return;
    }
    var password = document.getElementById("passwordInput").value;
    var userString = JSON.stringify(new NewUser(email, password));
    localStorage.setItem("user", userString);
    window.location.href = "work.html"; // Redirect to work page after signup
});
