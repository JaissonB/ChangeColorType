$('#norm-picker').blur(() => {
    var val = hexToRgb($('#norm-picker').val());
    $('#norm-red').val(val[0]);
    $('#norm-green').val(val[1]);
    $('#norm-blue').val(val[2]);
    var normalized = normalizeRGB (val[0], val[1], val[2]);
    $('#norm-red-response').val(normalized[0]);
    $('#norm-green-response').val(normalized[1]);
    $('#norm-blue-response').val(normalized[2]);
});

$('.normalize .div-input .inpt-text').blur(() => {
    var r = $('#norm-red').val();
    var g = $('#norm-green').val();
    var b = $('#norm-blue').val();
    
    if (r !== '' && g !== '' && b !=='') {
        if (r > 255) $('#norm-red').val(r = 255);
        if (g > 255) $('#norm-green').val(g = 255);
        if (b > 255) $('#norm-blue').val(b = 255);
        $('#norm-picker').val(rgbToHex(r, g, b));
        var normalized = normalizeRGB(r, g, b);
        $('#norm-red-response').val(normalized[0]);
        $('#norm-green-response').val(normalized[1]);
        $('#norm-blue-response').val(normalized[2]);
    }
})

$('.normalize .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#norm-red').val($('#norm-red').val().replace(/[^0-9]/g,''));
        $('#norm-green').val($('#norm-green').val().replace(/[^0-9]/g,''));
        $('#norm-blue').val($('#norm-blue').val().replace(/[^0-9]/g,''));
    }, .01)
});