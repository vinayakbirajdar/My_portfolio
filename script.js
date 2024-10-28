function sendMail(){
    parms = {
        name:document.getElementById("email").value,
        name:document.getElementById("name").value,
        comment:document.getElementById("comment").value
    }


emailjs.send("service_2tyotq8","template_dcq9d0s",parms).then(alert("Email sent!!! "))
}