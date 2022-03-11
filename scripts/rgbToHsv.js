//Normalizar RGB
$('#rgbToHsv-picker').blur(() => {
    var val = hexToRgb($('#rgbToHsv-picker').val());
    $('#rgbToHsv-red').val(val[0]);
    $('#rgbToHsv-green').val(val[1]);
    $('#rgbToHsv-blue').val(val[2]);
    var hsv = rgbToHsv(val[0], val[1], val[2]);
    $('#rgbToHsv-hue-response').val(hsv[0]);
    $('#rgbToHsv-saturation-response').val(hsv[1]);
    $('#rgbToHsv-value-response').val(hsv[2]);
});

$('.rgbToHsv .div-input .inpt-text').blur(() => {
    var r = $('#rgbToHsv-red').val();
    var g = $('#rgbToHsv-green').val();
    var b = $('#rgbToHsv-blue').val();
    
    if (r !== '' && g !== '' && b !=='') {
        if (r > 255) $('#rgbToHsv-red').val(r = 255);
        if (g > 255) $('#rgbToHsv-green').val(g = 255);
        if (b > 255) $('#rgbToHsv-blue').val(b = 255);
        $('#rgbToHsv-picker').val(rgbToHex(r, g, b));
        var hsv = rgbToHsv(r, g, b);
        $('#rgbToHsv-hue-response').val(hsv[0]);
        $('#rgbToHsv-saturation-response').val(hsv[1]);
        $('#rgbToHsv-value-response').val(hsv[2]);
    }
})

$('.rgbToHsv .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#rgbToHsv-red').val($('#rgbToHsv-red').val().replace(/[^0-9]/g,''));
        $('#rgbToHsv-green').val($('#rgbToHsv-green').val().replace(/[^0-9]/g,''));
        $('#rgbToHsv-blue').val($('#rgbToHsv-blue').val().replace(/[^0-9]/g,''));
    }, .01)
});