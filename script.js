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

function hexToRgb (hex) {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
}

function normalizeRGB (r, g, b) {
    var red = r / (r + g + b);
    var green = g / (r + g + b);
    var blue = b / (r + g + b);
    return [red, green, blue]
}