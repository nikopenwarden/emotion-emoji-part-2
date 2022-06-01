prediction_1 = ""
prediction_2 = ""
Webcam.set({
width:355,
height:305,
image_format: 'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function modelLoaded() {
    console.log('Model Loaded!');
}