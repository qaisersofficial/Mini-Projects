function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    const serviceID = 'service_evv2g6q';
    const templateID = 'template_gy8l5yq';

    emailjs.send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        console.log(res);
        alert('Message sent successfully');
    })
    .catch((err) => {
        console.log(err);
        alert('Failed to send message');
    });
}