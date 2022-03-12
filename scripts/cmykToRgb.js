$('#cmykToRgb-picker').blur(() => {
    var val = hexToCmyk($('#cmykToRgb-picker').val());
    $('#cmykToRgb-cyan').val(val[0]);
    $('#cmykToRgb-magenta').val(val[1]);
    $('#cmykToRgb-yellow').val(val[2]);
    $('#cmykToRgb-black').val(val[3]);
    var cmyk = rgbToCmyk(val[0], val[1], val[2]);
    $('#cmykToRgb-red-response').val(cmyk[0]);
    $('#cmykToRgb-green-response').val(cmyk[1]);
    $('#cmykToRgb-blue-response').val(cmyk[2]);
});

$('.cmykToRgb .div-input .inpt-text').blur(() => {
    var c = $('#cmykToRgb-cyan').val();
    var m = $('#cmykToRgb-magenta').val();
    var y = $('#cmykToRgb-yellow').val();
    var k = $('#cmykToRgb-black').val();
    
    if (c !== '' && m !== '' && y !=='' && k !== '') {
        if (c > 100) $('#cmykToRgb-cyan').val(c = 359);
        if (m > 100) $('#cmykToRgb-magenta').val(m = 100);
        if (y > 100) $('#cmykToRgb-yellow').val(y = 100);
        if (k > 100) $('#cmykToRgb-black').val(k = 100);
        var rgb = cmykToRgb(c, m, y, k);
        $('#cmykToRgb-picker').val(rgbToHex(rgb[0], rgb[1], rgb[2]));
        $('#cmykToRgb-red-response').val(rgb[0]);
        $('#cmykToRgb-green-response').val(rgb[1]);
        $('#cmykToRgb-blue-response').val(rgb[2]);
    }
})

$('.cmykToRgb .div-input .inpt-text').keydown(function () {
    setTimeout(function () {
        $('#cmykToRgb-cyan').val($('#cmykToRgb-cyan').val().replace(/[^0-9]/g,''));
        $('#cmykToRgb-magenta').val($('#cmykToRgb-magenta').val().replace(/[^0-9]/g,''));
        $('#cmykToRgb-yellow').val($('#cmykToRgb-yellow').val().replace(/[^0-9]/g,''));
        $('#cmykToRgb-black').val($('#cmykToRgb-black').val().replace(/[^0-9]/g,''));
    }, .01)
});