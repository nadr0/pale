/**
  * Loads an image to the canvas.
  */
function loadImageToCanvas() {

  var image;

  var imageFile = document.getElementById('imageFile');

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

    canvas.width  = image.width;
    canvas.height = image.height;

    var context = canvas.getContext('2d');
    context.drawImage(image,0,0);

    var imageData = context.getImageData(0,0,canvas.width, canvas.height);
    var histogram = new Histogram(imageData);

  }

}
