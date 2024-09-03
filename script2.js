

function sendMessage(event) {
    event.preventDefault(); 

    const parm = {

        name: document.getElementById('nameContact').value,
        email: document.getElementById('emailContact').value,
        subject: document.getElementById('subject').value,
      
        message:document.getElementById('messageContact').value,
    }

    console.log("Données à envoyer :", parm);
    emailjs.send("service_91hico4", "template_hwn2but", parm)
    
        .then(
            function(response) {
                alert("Email envoyé avec succès");
                // Vider les champs après l'envoi
                document.getElementById('nameContavt').value = '';
                document.getElementById('emailContact').value = '';
                document.getElementById('subject').value = '';
                document.getElementById('messageContact').value = '';
            },
            function(error) {
                alert("Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer.");
            }
        );
  
}