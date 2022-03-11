//Transforma cor em hexadecimal para RGB (retorna um array[r, g, b])
function hexToRgb (hex) {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
}

//Transforma cor em RGB para hexadecimal (retorna uma string)
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

//Normaliza a cor RGB (retorna um array com as cores normalizadas)
function normalizeRGB (r, g, b) {
    r = parseInt(r);
    g = parseInt(g);
    b = parseInt(b);
    
    var red = r / (r + g + b);
    var green = g / (r + g + b);
    var blue = b / (r + g + b);

    return [red, green, blue];
}

//Transforma cor em RGB para HSV (retorna um array)
function rgbToHsv (r, g, b) {
    console.log("RGB:", r, g, b)
    r = r/255
    g = g/255
    b = b/255
    var MAX = Math.max(r, Math.max(g, b));
    var MIN = Math.min(r, Math.min(g, b));
    var diff = MAX - MIN;
    var h;
    
    if (MAX == MIN) h = 0;
    else if (MAX == r) {
        h = (60 * ((g - b) / diff) + 360) % 360;
    }
    else if (MAX == g) {
        h = (60 * ((b - r) / diff) + 120) % 360;
    }
    else if (MAX == b) {
        h = (60 * ((r - g) / diff) + 240) % 360;
    }

    var s = MAX == 0 ? 0 : (diff / MAX) * 100;
    var v = MAX * 100;

    h = Math.round(h) + '°';
    s = Math.round(s) + '%';
    v = Math.round(v) + '%';

    return [h, s, v]
}