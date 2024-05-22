const menuIcon = document.querySelector('#menu-icon') ;
const navbar = document.querySelector('.navbar') ;

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
document.getElementById("Email_form").addEventListener("submit", function(event) {
    event.preventDefault();
    var first_name = document.getElementById("First_Name").value;
    var last_name = document.getElementById("Last_Name").value;
    var full_Name = first_name + " " + last_name;
    var message = document.getElementById("Message").value;
    var number = document.getElementById("Number").value;
    var subject = document.getElementById("Subject").value;
    var body = "Full Name: " + full_Name + "\nNumber: " + number +"\nMessage: " + message;
    var mailto_link = "mailto:alhajjar.sereen@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailto_link;
})