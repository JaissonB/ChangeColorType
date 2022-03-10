//Normalizar RGB
$('.norm-picker').blur(() => {
    var val = hexToRgb($('.norm-picker').val());
    $('#norm-red').val(val[0]);
    $('#norm-green').val(val[1]);
    $('#norm-blue').val(val[2]);
    var normalized = normalizeRGB (val[0], val[1], val[2]);
    $('#norm-red-response').val(normalized[0]);
    $('#norm-green-response').val(normalized[1]);
    $('#norm-blue-response').val(normalized[2]);
});

$('.normalize .div-input .inpt-text').blur(() => {
    var r = $('#norm-red').val().trim();
    var g = $('#norm-green').val().trim();
    var b = $('#norm-blue').val().trim();
    
    if (r !== '' && g !== '' && b !=='') {
        $('.norm-picker').val(rgbToHex(r, g, b));
        var normalized = normalizeRGB(r, g, b);
        console.log(normalized)
        $('#norm-red-response').val(normalized[0]);
        $('#norm-green-response').val(normalized[1]);
        $('#norm-blue-response').val(normalized[2]);
    }
})

function hexToRgb (hex) {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
}

function rgbToHex(r, g, b) {
    r = parseInt(r).toString(16);
    g = parseInt(g).toString(16);
    b = parseInt(b).toString(16);
    if (r.length === 1) {
        r = '0' + r;
    }
    if (g.length === 1) {
        g = '0' + g;
    }
    if (b.length === 1) {
        b = '0' + b;
    }
    var hex = '#' + r + g + b;
    return hex;
}

function normalizeRGB (r, g, b) {
    r = parseInt(r);
    g = parseInt(g);
    b = parseInt(b);
    
    var red = r / (r + g + b);
    var green = g / (r + g + b);
    var blue = b / (r + g + b);
    
    return [red, green, blue];
}