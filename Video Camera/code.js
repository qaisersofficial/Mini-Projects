// Select the video element from the HTML by its ID 'camera-Input'
const Camera = document.getElementById('camera-Input');
// Request access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      // If access is granted, assign the video stream to the video element's 'srcObject'
    Camera.srcObject = stream;
    // Start playing the video stream in the video element
    Camera.play();
});
