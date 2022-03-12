$('#hsvToRgb-picker').blur(() => {
    var val = hexToHsv($('#hsvToRgb-picker').val());
    $('#hsvToRgb-hue').val(val[0]);
    $('#hsvToRgb-saturation').val(val[1]);
    $('#hsvToRgb-value').val(val[2]);
    var rgb = hsvToRgb(val[0], val[1], val[2]);
    $('#hsvToRgb-red-response').val(rgb[0]);
    $('#hsvToRgb-green-response').val(rgb[1]);
    $('#hsvToRgb-blue-response').val(rgb[2]);
});

$('.hsvToRgb .div-input .inpt-text').blur(() => {
    var h = $('#hsvToRgb-hue').val();
    var s = $('#hsvToRgb-saturation').val();
    var v = $('#hsvToRgb-value').val();
    
    if (h !== '' && s !== '' && v !=='') {
        if (h > 359) $('#hsvToRgb-hue').val(h = 359);
        if (s > 100) $('#hsvToRgb-saturation').val(s = 100);
        if (v > 100) $('#hsvToRgb-value').val(v = 100);
        var rgb = hsvToRgb(h, s, v);
        $('#hsvToRgb-picker').val(rgbToHex(rgb[0], rgb[1], rgb[2]));
        $('#hsvToRgb-red-response').val(rgb[0]);
        $('#hsvToRgb-green-response').val(rgb[1]);
        $('#hsvToRgb-blue-response').val(rgb[2]);
    }
})

$('.hsvToRgb .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#hsvToRgb-hue').val($('#hsvToRgb-hue').val().replace(/[^0-9]/g,''));
        $('#hsvToRgb-saturation').val($('#hsvToRgb-saturation').val().replace(/[^0-9]/g,''));
        $('#hsvToRgb-value').val($('#hsvToRgb-value').val().replace(/[^0-9]/g,''));
    }, .01)
});