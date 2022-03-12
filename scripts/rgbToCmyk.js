$('#rgbToCmyk-picker').blur(() => {
    var val = hexToRgb($('#rgbToCmyk-picker').val());
    $('#rgbToCmyk-red').val(val[0]);
    $('#rgbToCmyk-green').val(val[1]);
    $('#rgbToCmyk-blue').val(val[2]);
    var cmyk = rgbToCmyk(val[0], val[1], val[2]);
    $('#rgbToCmyk-cyan-response').val(cmyk[0]);
    $('#rgbToCmyk-magenta-response').val(cmyk[1]);
    $('#rgbToCmyk-yellow-response').val(cmyk[2]);
    $('#rgbToCmyk-black-response').val(cmyk[3]);
});

$('.rgbToCmyk .div-input .inpt-text').blur(() => {
    var r = $('#rgbToCmyk-red').val();
    var g = $('#rgbToCmyk-green').val();
    var b = $('#rgbToCmyk-blue').val();
    
    if (r !== '' && g !== '' && b !=='') {
        if (r > 255) $('#rgbToCmyk-red').val(r = 255);
        if (g > 255) $('#rgbToCmyk-green').val(g = 255);
        if (b > 255) $('#rgbToCmyk-blue').val(b = 255);
        $('#rgbToCmyk-picker').val(rgbToHex(r, g, b));
        var cmyk = rgbToCmyk(r, g, b);
        $('#rgbToCmyk-cyan-response').val(cmyk[0]);
        $('#rgbToCmyk-magenta-response').val(cmyk[1]);
        $('#rgbToCmyk-yellow-response').val(cmyk[2]);
        $('#rgbToCmyk-black-response').val(cmyk[3]);
    }
})

$('.rgbToCmyk .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#rgbToCmyk-red').val($('#rgbToCmyk-red').val().replace(/[^0-9]/g,''));
        $('#rgbToCmyk-green').val($('#rgbToCmyk-green').val().replace(/[^0-9]/g,''));
        $('#rgbToCmyk-blue').val($('#rgbToCmyk-blue').val().replace(/[^0-9]/g,''));
    }, .01)
});