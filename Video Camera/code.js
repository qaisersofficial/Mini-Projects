const Camera = document.getElementById('camera-Input');
navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    Camera.srcObject = stream;
    Camera.play();
});
