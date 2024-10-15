
$(document).ready(function () {
    $('#btnEnviar').prop('disabled',true);
    emailjs.init("tu_user_id"); // Reemplaza con tu User ID
});



document.getElementById('cotizacion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const templateParams = {
        from_name: document.getElementById('txtNombre').value,
        subject: document.getElementById('txtAsunto').value,
        product: document.querySelector('input[name="producto"]').value,
        email: document.getElementById('txtEmail').value,
        message: document.querySelector('textarea[name="msg"]').value
    };

    emailjs.send('tu_service_id', 'tu_template_id', templateParams)
        .then(function(response) {
            console.log('Éxito:', response.status, response.text);
            alert('Correo enviado exitosamente!');
        }, function(error) {
            console.log('Error:', error);
            alert('Error al enviar el correo. Inténtalo de nuevo.');
        });
});