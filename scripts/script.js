//Transforma cor em hexadecimal para RGB (retorna um array[r, g, b])
function hexToRgb (hex) {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
}

//Transforma cor em hexadecimal para HSV (retorna um array[h, s, v])
function hexToHsv (hex) {
    var rgb = hexToRgb(hex);
    var hsv = rgbToHsv(rgb[0], rgb[1], rgb[2]);
    var h = hsv[0].replace(/[^0-9]/g,'');
    var s = hsv[1].replace(/[^0-9]/g,'');
    var v = hsv[2].replace(/[^0-9]/g,'');

    return [h, s, v];
}

//Transforma cor em RGB para hexadecimal (retorna uma string)
function rgbToHex (r, g, b) {
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
    r /= 255;
    g /= 255;
    b /= 255;

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

//Transforma cor em RGB para CMYK (retorna um array)
function rgbToCmyk (r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    var MAX = Math.max(r, g, b);
    var k = 1 - MAX;

    var c = Math.round((1 - r - k) / (1 - k) * 100) + '%';
    var m = Math.round((1 - g - k) / (1 - k) * 100) + '%';
    var y = Math.round((1 - b - k) / (1 - k) * 100) + '%';
    k = Math.round(k * 100) + '%';
    
    return [c, m, y, k];
}

function hsvToRgb (h, s, v) {
    s /= 100;
    v /= 100;
    var c = v * s;
    var x = c * (1 - Math.abs((((h / 60)) % 2) - 1));
    var r = 0, g = 0, b = 0;

    if (h >= 0 && h < 60) {
        r = c;
        g = x;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
    } else if (h >= 120 && h < 180) {
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        b = c;
    } else if (h >= 300 && h < 360) {
        r = c;
        b = x;
    }

    var m = v - c;
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

   return [r, g, b]
}