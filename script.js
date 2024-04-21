
var loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function() {
    var email = document.getElementById("emailInput").value;
    localStorage.setItem("userEmail", email);
    window.location.href = "work.html";
});
