function updatePalette(colors, shuffler){

    if(shuffler) {
        window._COLORS = shuffler(window._COLORS);
        colors = window._COLORS;
    }

    if ( typeof updatePalette.counter == 'undefined' ) {
           updatePalette.counter = 0;
       }

    var syntax = {
        // OG MONOKAI HERE!
        gutter_bg_color:"#2F3129",
        gutter_t_color:"#8F908A",
        margin_color:"#555651",
        bg_color:"#272822",
        active_line_color:"#202020",
        active_gutter_color:"#272727",
        syntax:"#F8F8F2",
        color_1:"##49483E",
        color_2:"#A6E22E",
        color_3:"#66D9EF",
        color_4:"#F8F8F0",
        color_5:"#F92672",
        color_6:"#AE81FF",
        color_7:"#FD971F",
        color_8:"#E6DB74",
        color_9:"#75715E"
    }

    var i = 0;
    for(c in syntax) {
        syntax[c] = colors[i];
        i++;
    }
    define("ace/theme/pale"+updatePalette.counter,["require","exports","module","ace/lib/dom"], function(require, exports, module) {
    exports.syntax = syntax;
    exports.isDark = true;
    exports.cssClass = "ace-pale-"+(updatePalette.counter-1)+"";
    exports.cssText = ".ace-pale-"+(updatePalette.counter-1)+" .ace_gutter {\
    background: "+syntax.gutter_bg_color+";\
    color: "+syntax.gutter_t_color+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_print-margin {\
    width: 1px;\
    background: "+syntax.margin_color+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" {\
    background-color: "+syntax.bg_color+";\
    color: "+syntax.syntax+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_cursor {\
    color: "+syntax.color_4+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_marker-layer .ace_selection {\
    background: "+syntax.color_1+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+".ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px "+syntax.bg_color+";\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_marker-layer .ace_step {\
    background: rgb(102, 82, 0)\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid "+syntax.color_1+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_marker-layer .ace_active-line {\
    background: "+syntax.active_line_color+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_gutter-active-line {\
    background-color: "+syntax.active_gutter_color+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_marker-layer .ace_selected-word {\
    border: 1px solid "+syntax.color_1+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_invisible {\
    color: #52524d\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_entity.ace_name.ace_tag,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_keyword,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_meta.ace_tag,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_storage {\
    color: "+syntax.color_5+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_punctuation,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_punctuation.ace_tag {\
    color: "+syntax.syntax+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_constant.ace_character,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_constant.ace_language,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_constant.ace_numeric,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_constant.ace_other {\
    color: "+syntax.color_6+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_invalid {\
    color: "+syntax.color_4+";\
    background-color: "+syntax.color_5+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_invalid.ace_deprecated {\
    color: "+syntax.color_4+";\
    background-color: "+syntax.color_6+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_support.ace_constant,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_support.ace_function {\
    color: "+syntax.color_3+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_fold {\
    background-color: "+syntax.color_2+";\
    border-color: "+syntax.syntax+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_storage.ace_type,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_support.ace_class,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_support.ace_type {\
    font-style: italic;\
    color: "+syntax.color_3+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_entity.ace_name.ace_function,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_entity.ace_other,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_entity.ace_other.ace_attribute-name,\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_variable {\
    color: "+syntax.color_2+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_variable.ace_parameter {\
    font-style: italic;\
    color: "+syntax.color_7+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_string {\
    color: "+syntax.color_8+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_comment {\
    color: "+syntax.color_9+"\
    }\
    .ace-pale-"+(updatePalette.counter-1)+" .ace_indent-guide {\
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
    }";

    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
    });

    updatePalette.counter = updatePalette.counter + 1;
    updateAceTheme();

    if(shuffler) {
        addRandomColorToDropDown();
    }
}

function updateAceTheme(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/pale"+(updatePalette.counter-1));
    ace.edit(editor).session.setValue(codeToDisplay);
}

function hexToRGB(hex){

   hex = hex.replace('#','');
   r = parseInt(hex.substring(0,2), 16);
   g = parseInt(hex.substring(2,4), 16);
   b = parseInt(hex.substring(4,6), 16);

   return [r,g,b];
}

function fitToMonokai(colors){

    // Lets fit the colors to the monokai syntax theme
    var monokai_base = {
        // OG MONOKAI HERE!
        gutter_bg_color:"#2F3129",
        gutter_t_color:"#8F908A",
        margin_color:"#555651",
        bg_color:"#272822",
        active_line_color:"#202020",
        active_gutter_color:"#272727",
        syntax:"#F8F8F2",
        color_1:"#49483E",
        color_2:"#A6E22E",
        color_3:"#66D9EF",
        color_4:"#F8F8F0",
        color_5:"#F92672",
        color_6:"#AE81FF",
        color_7:"#FD971F",
        color_8:"#E6DB74",
        color_9:"#75715E"
    }

    var syntax = {
        gutter_bg_color:"#2F3129",
        gutter_t_color:"#8F908A",
        margin_color:"#555651",
        bg_color:"#272822",
        active_line_color:"#202020",
        active_gutter_color:"#272727",
        syntax:"#F8F8F2",
        color_1:"#49483E",
        color_2:"#A6E22E",
        color_3:"#66D9EF",
        color_4:"#F8F8F0",
        color_5:"#F92672",
        color_6:"#AE81FF",
        color_7:"#FD971F",
        color_8:"#E6DB74",
        color_9:"#75715E"
    }

    var solution = {
        gutter_bg_color:"#2F3129",
        gutter_t_color:"#8F908A",
        margin_color:"#555651",
        bg_color:"#272822",
        active_line_color:"#202020",
        active_gutter_color:"#272727",
        syntax:"#F8F8F2",
        color_1:"##49483E",
        color_2:"#A6E22E",
        color_3:"#66D9EF",
        color_4:"#F8F8F0",
        color_5:"#F92672",
        color_6:"#AE81FF",
        color_7:"#FD971F",
        color_8:"#E6DB74",
        color_9:"#75715E"
    }


    var iter = 0;
    // RGB version of syntax
    for(c in monokai_base) {
        monokai_base[c] = hexToRGB(monokai_base[c]);
        syntax[c] = hexToRGB(colors[iter]);
        iter ++;
    }

    var j = 0;
    while( j != MIN_BINS){

        var bestDistances = [];

        for( c in syntax) {

            var minDistance  = Infinity;
            var keyBase   = null;
            var keySyntax = null;

            var syntaxColor = syntax[c];

            for( cb in monokai_base) {

                var baseColor = monokai_base[cb];

                var diff = [syntaxColor[0] - baseColor[0], syntaxColor[1] - baseColor[1], syntaxColor[2] - baseColor[2]];
                diff[0] = diff[0] * diff[0];
                diff[1] = diff[1] * diff[1];
                diff[2] = diff[2] * diff[2];

                var distance = Math.sqrt(diff[0] + diff[1] + diff[2]);

                if(distance < minDistance) {
                    minDistance = distance;
                    keyBase = cb;
                    keySyntax = c;
                }

            }

            var info = {
                'distance': minDistance,
                'keyBase': keyBase,
                'keySyntax': keySyntax,
                'color': rgbToHex(syntaxColor)
            }

            bestDistances.push(info);

        }

        var bestColorDistance = Infinity
        var bestColor = null;
        for (var i = 0; i < bestDistances.length; i++) {
            if(bestDistances[i].distance < bestColorDistance) {

                bestColorDistance = bestDistances[i].distance;
                bestColor = bestDistances[i];

            }
        }
        // FOUND THE BEST CURRENT COLOR LOL.
        solution[bestColor.keyBase] = bestColor.color;

        delete syntax[bestColor.keySyntax];
        delete monokai_base[bestColor.keyBase];
        j++;
    }

    var realFuckingColors = [];
    for(c in solution) {
        realFuckingColors.push(solution[c]);
    }

    _COLORS = realFuckingColors;

    updatePalette(_COLORS);
}
