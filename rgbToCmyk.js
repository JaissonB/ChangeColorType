function RGBtoCMYK(r, g, b){
    var c;
    var m;
    var y;
    var k;
    var MAX;
    
    r = r / 255;
    g = g / 255;
    b = b / 255;

    MAX = Math.max(r, g, b);
    k = 1 - MAX;
    
    c = Math.round((1 - r - k) / (1 - k) * 100);
    m = Math.round((1 - g - k) / (1 - k) * 100);
    y = Math.round((1 - b - k) / (1 - k) * 100);
    k = Math.round(k * 100);
    
    return [c,m,y,k];
}
