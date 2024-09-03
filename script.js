

function sendEmail(event) {
    event.preventDefault(); 
    const parm = {

        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        service: document.getElementById('service').value,
        doctor: document.getElementById('doctor').value,
        message:document.getElementById('message').value
    }

    console.log("Données à envoyer :", parm);
    emailjs.send("service_ltj73u8", "template_h152g47", parm)
    
        .then(
            function(response) {
                alert("Email envoyé avec succès");
                // Vider les champs après l'envoi
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('date').value = '';
                document.getElementById('service').value = '';
                document.getElementById('doctor').value = '';
                document.getElementById('message').value = '';

                    // Supprimer les paramètres de la requête de l'URL
            const url = new URL(window.location.href);
            url.search = "";
            window.history.replaceState({}, document.title, url.href);
            }  
            
            
            ,

            
            function(error) {
                alert("Une erreur est survenue lors de l'envoi de l'email. Veuillez réessayer.");
            }
        );
  
}