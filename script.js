console.log('script.js sourced');


var borderStyle;
var borderWidth;
var borderColor;
var borderRadius;

function updateDisplay(){
    border = $ex.css('border');
    $output.html("The current border style is: <br/><b>" + border + "</b>");
}

function updateRadius(){
    borderRadius = $ex.css('border-radius');
    
    $('#outputRadius').html("The current border radius is: <br/><b>" + borderRadius + "</b>");

    if (!($('#outputRadius').is(':visible'))){        
        $('#outputRadius').show();
    }
}

function cycleStyle(){
    var style = $ex.css('border-style');
    
    switch(style){
        case 'solid':
            style='dotted';
            break;
        case 'dotted':
            style='double';
            break;
        case 'double':
            style='dashed';
            break;
        case 'dashed':
            style='solid';
            break;
        default:
            style='solid';
    }

    $ex.css('border-style', style);
    updateDisplay();
}


function thickenBorder(){    
    var width = parseInt($ex.css('border-width'));

    if (width < 65) {
        width += 5;
    } else {
        alert('maximum width achieved');
    }

    $ex.css('border-width', width + 'px');
    updateDisplay();
}


function thinBorder(){    
    var width = parseInt($ex.css('border-width'));

    if (width > 0) {
        width -= 5;
    } else {
        alert('minimum width achieved');
    }

    $ex.css('border-width', width + 'px');
    updateDisplay();
}

function radiusUp(){
    var radius = parseInt($ex.css('border-radius'));
    console.log(radius);
    
    if (radius < 100) {
        radius +=10;
    } else {
        alert('maximum radius achieved');
    }

    $ex.css('border-radius', radius + 'px');
    updateRadius();
    
}

function radiusDown(){
    var radius = parseInt($ex.css('border-radius'));
    console.log(radius);
    
    if (radius > 0) {
        radius -=10;
    } else {
        alert('minimum radius achieved');
    }

    $ex.css('border-radius', radius + 'px');
    updateRadius();
    
}

function randColor(){
    var rot = Math.floor((Math.random() * 255));
    var gruen = Math.floor((Math.random() * 255));
    var blau = Math.floor((Math.random() * 255));

    var color = 'rgb(' + rot + ', ' + gruen + ', ' + blau + ')';

    $ex.css('border-color', color);
    updateDisplay();
}

$(document).ready(function(){

    $('#styleButton').click(cycleStyle);
    $('#thickerButton').click(thickenBorder);
    $('#thinnerButton').click(thinBorder);
    $('#radiusUp').click(radiusUp);
    $('#radiusDown').click(radiusDown);
    $('#colorButton').click(randColor);

    $ex = $('#exampleDiv');
    $output = $('#output');

    border = $ex.css('border');

    borderRadius = $ex.css('border-radius');

    $output.html("The current border style is: <br/><b>" + border + "</b>");
    $('#outputRadius').html("The current border radius is: <br/><b>" + borderRadius + "</b>");

})