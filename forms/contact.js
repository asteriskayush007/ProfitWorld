function gotowhatsappmain() {

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var service = document.getElementById("service").value;
var message = document.getElementById("message-field").value;

var url = "https://wa.me/918789529215?text="
    + "Name: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Service: " + service;
    + "Message: " + message;


window.open(url, '_blank').focus();
}

gotowhatsappmain();