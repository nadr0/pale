/**
  * Loads an image to the canvas.
  */
function loadImageToCanvas() {

  var image;

  var imageFile = document.getElementById('file-input');

  // Get the file
  var file = imageFile.files[0];

  var fileReader = new FileReader();
  fileReader.onload = createImage;
  fileReader.readAsDataURL(file);

  // Helper Functions
  function createImage() {

    image = new Image();
    image.onload = imageLoaded;
    image.src = fileReader.result;

  }

  function imageLoaded() {

    var canvas = document.getElementById('canvas');

    var context = canvas.getContext('2d');

    context.clearRect(0,0,canvas.width,canvas.height);

    if(image.width > canvas.width || image.height > canvas.height){
        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
    }else {
        context.drawImage(image, 0, 0);
    }

    var imageData = context.getImageData(0,0,canvas.width, canvas.height);
    var histogram = new Histogram(imageData);

  }

}
