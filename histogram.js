function Histogram(imageData) {

  // Data is treated as a histogram 3D grid
  this.data = [];

  this.gridSize = 3;
  this.gridSpacing = 256/this.gridSize;

  this.init();
  this.compute(imageData);

}

Histogram.prototype.init = function() {

  // Setup the histogram buckets
  for(var i = 0; i < this.gridSize; i++){
    this.data[i] = [];
    for (var j = 0; j < this.gridSize; j++) {
      this.data[i][j] = [];
      for (var k = 0; k < this.gridSize; k++) {
        this.data[i][j][k] = [];
      }
    }
  }
}

Histogram.prototype.compute = function(imageData) {

  // RGB array data
  var data = imageData.data;

  for(var i = 0; i < data.length; i += 4) {

    var red   = data[i];
    var green = data[i + 1];
    var blue  = data[i + 2];

    var currentColor = new Color(red,green,blue);

    var binIndex = this.determineBin(currentColor);
    if(!Number.isInteger(binIndex[0]) || !Number.isInteger(binIndex[1]) || !Number.isInteger(binIndex[2])) {
      console.log("Color could not be binned ...");
    }
    window.data = this.data;
    this.data[binIndex[0]][binIndex[1]][binIndex[2]].push(currentColor);

  }

  this.topColors();
}

Histogram.prototype.determineBin = function(color) {

  var redIndex   = whatBin(color.data.r, this.gridSize, this.gridSpacing);
  var greenIndex = whatBin(color.data.g, this.gridSize, this.gridSpacing);
  var blueIndex  = whatBin(color.data.b, this.gridSize, this.gridSpacing);

  function whatBin(value, gridSize, gridSpacing) {
    var index = 0;
    for(var i = 0; i < gridSize; i++) {
      var upperbound = gridSpacing * (i+1)
      if(upperbound === 256) {
        upperbound += 1;
      }
      if(value >= (gridSpacing * i) && value < upperbound){
        index = i;
        break;
      }
    }
    return index;
  }

  return [redIndex, greenIndex, blueIndex];
}

Histogram.prototype.topBins = function() {

  var top = [];

  for(var i = 0; i < this.gridSize; i++){
    for (var j = 0; j < this.gridSize; j++) {
      for (var k = 0; k < this.gridSize; k++) {

        if(this.data[i][j][k].length > 0) {
          var currentData = {
            binCount: this.data[i][j][k].length,
            index:[i,j,k]
          }
          top.push(currentData);
        }

      }
    }
  }

  // Sort the array and have it be reversed.
  top = top.sort(function(a,b){
    return b.binCount - a.binCount;
  });

  return top;
}

Histogram.prototype.topColors = function() {

  // Get the top bins
  var bins = this.topBins();
  var binCutoff = 10;
  var colors = [];

  for (var i = 0; (i < binCutoff); i++) {
    // The bins array has an object with binCount and index. The index is what we want.
    var currBin = bins[i].index;
    var colorArray = this.data[currBin[0]][currBin[1]][currBin[2]];
    var avgColor = avgArray(colorArray);

    colors.push(avgColor);
  }

  function avgArray(arr) {
    var sum = new Color(0,0,0);
    var N = arr.length;
    for (var i = 0; i < N; i++) {
      var c = arr[i];
      sum.data.r += c.data.r;
      sum.data.g += c.data.g;
      sum.data.b += c.data.b;
    }

    sum.data.r  = Math.floor(sum.data.r/N);
    sum.data.g  = Math.floor(sum.data.g/N);
    sum.data.b  = Math.floor(sum.data.b/N);

    return sum;
  }

  this.displayColors(colors);
}

Histogram.prototype.displayColors = function(colors) {

  for (var i = 0; i < colors.length; i++) {
    var elem = document.createElement('div');
    elem.style.width = "50px";
    elem.style.height = "50px";
    elem.style.display = "inline-block";
    elem.style.backgroundColor = "rgba("+colors[i].data.r+","+colors[i].data.g+","+colors[i].data.b+",1.0)";
    window.document.body.append(elem);
  }

}
