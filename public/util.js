function initPageLayout() {

    var navbar_palette_height = 131;

    var pageWidth  = window.innerWidth;
    var pageHeight = window.innerHeight;

    var canvas = document.getElementById("canvas");

    canvas.width = (pageWidth*0.50);
    canvas.height = pageHeight - navbar_palette_height;

    var mainContainer = document.getElementById('mainContainer');
    mainContainer.style.height = (pageHeight - navbar_palette_height)+"px";

}

function clearPaletteDisplay() {

    var paletteDisplay = document.getElementById('palette-display');
    while(paletteDisplay.firstChild) {
        paletteDisplay.removeChild(paletteDisplay.firstChild);
    }

}

function outputAtomSyntaxColorFile(colors){
    // 12 colors min.

    var hexColors = [];

    if(colors.length < MIN_BINS) {
        console.log('Need more colors for syntax theme.')
        return;
    }

    for (var i = 0; i < colors.length; i++) {
        var r = colors[i].data.r.toString(16);
        var g = colors[i].data.g.toString(16);
        var b = colors[i].data.b.toString(16);

        if(r.length == 1) {
            r = '0' + r;
        }
        if(b.length == 1) {
            b = '0' + b;
        }
        if(g.length == 1) {
            g = '0' + g;
        }

        var current_color = '#' + r + g + b;
        hexColors.push(current_color);
    }

    window._COLORS = hexColors;

    updatePalette(hexColors);

}

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function rgbToHex(color) {
    var r = color[0].toString(16);
    var g = color[1].toString(16);
    var b = color[2].toString(16);

    if(r.length == 1) {
        r = '0' + r;
    }
    if(b.length == 1) {
        b = '0' + b;
    }
    if(g.length == 1) {
        g = '0' + g;
    }

    return '#' + r + g + b;
}

function addRandomColorToDropDown() {

    if ( typeof addRandomColorToDropDown.counter == 'undefined' ) {
           // It has not... perform the initialization
           addRandomColorToDropDown.counter = 0;
       }

    var dropDown = document.getElementById('previous-colors-dropdown');
    var listElement = document.createElement('li');
    var textElement = document.createElement('a');

    textElement.innerHTML = ''+(addRandomColorToDropDown.counter);
    textElement.setAttribute('random-color',''+(updatePalette.counter-1))

    textElement.onclick = function() {

        var randomColor = this.getAttribute('random-color');
        editor.setTheme("ace/theme/pale"+randomColor);
        ace.edit(editor).session.setValue(codeToDisplay);

    }

    listElement.append(textElement);
    dropDown.append(listElement);
    addRandomColorToDropDown.counter = addRandomColorToDropDown.counter + 1;

}

function clearRandomColorDropDown() {
    addRandomColorToDropDown.counter = 0;

    var dropDown = document.getElementById('previous-colors-dropdown');
    while(dropDown.firstChild) {
        dropDown.removeChild(dropDown.firstChild);
    }
}

function generatePaletteText() {

    var currentSyntaxTheme=editor.container.classList[editor.container.classList.length - 1];

    var parsedName = currentSyntaxTheme.split('-');

    var syntaxTheme = parsedName[1] + parsedName[2];

    var mod = require('ace/theme/'+syntaxTheme);
    var syntax = mod.syntax;

    var output = {
        "@ghost-white": syntax.color_4,
        "@light-ghost-white": syntax.syntax,
        "@light-gray": "#CCC",
        "@gray": "#888",
        "@brown-gray": syntax.color_1,
        "@dark-gray": syntax.bg_color,
        "@yellow": syntax.color_8,
        "@blue": syntax.color_3,
        "@pink": syntax.color_5,
        "@purple": syntax.color_6,
        "@brown": syntax.color_9,
        "@orange": syntax.color_7,
        "@green": syntax.color_2,
        "@gutter-bg-color": syntax.gutter_bg_color,
        "@gutter-txt-color": syntax.gutter_t_color,
        "@gutter-slt-color": syntax.active_gutter_color,
        "@current-line": syntax.active_line_color,
        "@sea-green": "#529B2F",
        "@light-orange": "#FFD569"
    }


    var copyPaste = '// Download the syntax package for atom from the link above [atom syntax package]\n// cd ~/.atom/packages/pale-syntax/styles/ to find the color.less file. \n// Copy and paste these colors in colors.less (i.e. overwrite the file)\n';

    for (c in output) {
        copyPaste += c + ': ' + output[c] + ';\n';
    }

    ace.edit(editor).session.setValue(copyPaste);
}


var codeToDisplay = '// Code that draws a bezier curve with 2 control points.\n'

codeToDisplay += 'function BezierCurve(p0,p1,p2,p3){\n\
   var p01 = p0.mp(p1);\n\
   var p12 = p1.mp(p2);\n\
   var p23 = p2.mp(p3);\n\
   var p012 = p01.mp(p12);\n\
   var p123 = p12.mp(p23);\n\
   var p0123 = p012.mp(p123);\n\
   var dx = p3.pos.x - p0.pos.x;\n\
   var dy = p3.pos.y - p0.pos.y;\n\
   var d2 = Math.abs(((p1.pos.x - p3.pos.x) * dy - (p1.pos.y - p3.pos.y) * dx));\n\
   var d3 = Math.abs(((p2.pos.x - p3.pos.x) * dy - (p2.pos.y - p3.pos.y) * dx));\n\
   var someValue = 0.25;\n\
   if((d2 + d3)*(d2 + d3) < someValue *(dx*dx + dy*dy)){\n\
       points.push(p0123);\n\
       return;\n\
   }else{\n\
       BezierCurve(p0,p01,p012,p0123);\n\
       BezierCurve(p0123,p123,p23,p3);\n\
   }\n\
}\n\
function drawCurve(){\n\
   points.push(p3);\n\
   for(var i = 0; i < points.length - 1; i++){\n\
       context.beginPath();\n\
       context.strokeStyle = "red";\n\
       context.lineWidth = 2;\n\
       context.moveTo(points[i].pos.x, points[i].pos.y);\n\
       context.lineTo(points[i+1].pos.x, points[i+1].pos.y);\n\
       context.stroke();\n\
       context.closePath();\n\
   }\n\
}\n\
function drawPoint(p,color){\n\
   context.beginPath();\n\
   context.fillStyle = color;\n\
   context.arc(p.pos.x, p.pos.y, 5.0, 0, 2*Math.PI);\n\
   context.fill();\n\
}\n\
function animate(canvas, context) {\n\
   context.clearRect(0, 0, canvas.width, canvas.height);\n\
   BezierCurve(p0,p1,p2,p3);\n\
   drawCurve();    \n\
}\n\
function moveCurve(){\n\
   var drag = false;\n\
   // Adds mouse move event listener to the canvas\n\
   document.body.addEventListener("mousemove", function( event ) { \n\
       var rect = canvas.getBoundingClientRect();\n\
       if(drag && hit){\n\
           currentPoint.pos.x = event.clientX - rect.left;\n\
           currentPoint.pos.y = event.clientY - rect.top;\n\
       }\n\
       Curve();\n\
   }, false);\n\
   canvas.addEventListener("mousedown", function( event ) {\n\
       var rect = canvas.getBoundingClientRect();\n\
       drag = true;\n\
       checkFocusPoint(event.clientX - rect.left, event.clientY - rect.top, 10);\n\
   }, false);\n\
   canvas.addEventListener("mouseup", function(event){\n\
       drag = false;\n\
       hit = false;\n\
   }, false);\n\
}\n\
function checkFocusPoint(x,y,range){\n\
   for (var i = 0; i < movePoints.length; i++) {\n\
       var p = movePoints[i];\n\
       if(x >= p.pos.x - range && x <= p.pos.x + range && y <= p.pos.y + range && y >= p.pos.y - range){\n\
           currentPoint = p;\n\
           hit = true;\n\
       }\n\
   };\n\
}\n\
function Curve(){\n\
   context.clearRect(0, 0, canvas.width, canvas.height);\n\
   drawControlPolygon();\n\
   points = [];\n\
   points.push(p0);\n\
   BezierCurve(p0,p1,p2,p3);\n\
   drawCurve();   \n\
   drawPoint(p0, "green");\n\
   drawPoint(p1, "purple");\n\
   drawPoint(p2, "purple");  \n\
   drawPoint(p3, "green");\n\
}\n\
function drawControlPolygon(){\n\
   drawLine(p0,p1);\n\
   drawLine(p1,p2);\n\
   drawLine(p2,p3);\n\
}\n\
function drawLine(p1, p2){\n\
   context.beginPath();\n\
   context.strokeStyle = "blue";\n\
   context.lineWidth = 1;\n\
   context.moveTo(p1.pos.x, p1.pos.y);\n\
   context.lineTo(p2.pos.x, p2.pos.y);\n\
   context.stroke();\n\
   context.closePath();\n\
}\n\
var points = [];\n\
var movePoints = [];\n\
var currentPoint = new point(0,0);\n\
var hit = false;\n\
var p0 = new point(50,150);\n\
var p1 = new point(50,50);\n\
var p2 = new point(125,75);\n\
var p3 = new point(175,135);\n\
points.push(p0);\n\
movePoints.push(p1);\n\
movePoints.push(p2);\n\
movePoints.push(p0);\n\
movePoints.push(p3);\n\
var mos = {x:0,y:0};\n\
var canvas = document.getElementById("myCanvas");\n\
var context = canvas.getContext("2d");\n\
var oldMouse = {x:0, y:0};\n\
animate(canvas,context);\n\
moveCurve();\n';
