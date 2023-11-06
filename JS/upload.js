
var userImage ='';
const fileInput = document.getElementById('file-input');
const image = document.getElementById('image');
const cropper = new Cropper(image, {
    aspectRatio: 1, // Set the aspect ratio to 1:1
    viewMode: 1,    // Set the view mode to 1 (indicates the cropped area should be a square)
    dragMode: 'move', // Change drag mode to move for precise cropping
});

fileInput.addEventListener('change', function () {
    
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            console.log(image);
            cropper.replace(e.target.result);
        };
        reader.readAsDataURL(file);
        
    }
});

const cropButton = document.getElementById('crop-button');
cropButton.addEventListener('click', function () {
    const croppedCanvas = cropper.getCroppedCanvas({
        width: 700,  // Set the width and height for the circular crop
        height: 700,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high',
    });

    // Create a circular mask for the image
    const circularMaskCanvas = document.createElement('canvas');
    const ctx = circularMaskCanvas.getContext('2d');
    circularMaskCanvas.width = croppedCanvas.width;
    circularMaskCanvas.height = croppedCanvas.height;
    const centerX = circularMaskCanvas.width / 2;
    const centerY = circularMaskCanvas.height / 2;
    const radius = circularMaskCanvas.width / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    // Apply the circular mask to the cropped image
    const maskedCroppedCanvas = document.createElement('canvas');
    maskedCroppedCanvas.width = croppedCanvas.width;
    maskedCroppedCanvas.height = croppedCanvas.height;
    const maskedCtx = maskedCroppedCanvas.getContext('2d');

    // Apply the circular mask to the cropped image
    maskedCtx.drawImage(croppedCanvas, 0, 0);
    maskedCtx.globalCompositeOperation = 'destination-in';
    maskedCtx.drawImage(circularMaskCanvas, 0, 0);

    // Convert the final canvas to a data URL for download
    const finalImage = maskedCroppedCanvas.toDataURL('image/png'); // Change format as needed
    const circularImage = document.createElement('img');
    circularImage.src = finalImage;
    userImage = finalImage;

    localStorage.setItem('userImage', JSON.stringify(userImage));
    console.log(JSON.parse(localStorage.getItem('userImage')));
    
    
});
