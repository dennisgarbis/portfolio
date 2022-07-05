
"use strict"

window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", firstName);
});

function firstName() {
    let user = getUser()
    showResults(user);
}

function getUser() {
    let user = document.getElementById("user").value;
    console.log('Input: ${typeof user}');
    return user;
}

function showResults(user) {
    document.getElementById("userName").innerHTML = "Hello " + user + ", it is very nice to meet you. I hope you like my page.";
    document.getElementById("userAge").innerHTML = "Well " + user + ", how old are you?";
}