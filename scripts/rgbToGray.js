$('#rgbToGray-picker').blur(() => {
    var val = hexToRgb($('#rgbToGray-picker').val());
    console.log(val)
    $('#rgbToGray-red').val(val[0]);
    $('#rgbToGray-green').val(val[1]);
    $('#rgbToGray-blue').val(val[2]);
    var gray = rgbToGray(val[0], val[1], val[2]);
    console.log(gray)
    $('#rgbToGray-gray-response').val(gray);
});

$('.rgbToGray .div-input .inpt-text').blur(() => {
    var r = $('#rgbToGray-red').val();
    var g = $('#rgbToGray-green').val();
    var b = $('#rgbToGray-blue').val();
    
    if (r !== '' && g !== '' && b !=='') {
        if (r > 255) $('#rgbToGray-red').val(r = 255);
        if (g > 255) $('#rgbToGray-green').val(g = 255);
        if (b > 255) $('#rgbToGray-blue').val(b = 255);

        r = parseInt(r);
        g = parseInt(g);
        b = parseInt(b);

        $('#rgbToGray-picker').val(rgbToHex(r, g, b));
        var gray = rgbToGray(r, g, b);
        $('#rgbToGray-gray-response').val(gray);
    }
})

$('.rgbToGray .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#rgbToGray-red').val($('#rgbToGray-red').val().replace(/[^0-9]/g,''));
        $('#rgbToGray-green').val($('#rgbToGray-green').val().replace(/[^0-9]/g,''));
        $('#rgbToGray-blue').val($('#rgbToGray-blue').val().replace(/[^0-9]/g,''));
    }, .01)
});