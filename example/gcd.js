
function gcd(a, b){
    console.log('What is the GCD of', a, 'and', b, '?');
    while (b !== 0){
        var t = b;
        b = a % b;
        a = t;
    }
    return a;
}

self.onmessage = function(e){
    var ans = gcd.apply(null, JSON.parse(e.data));
    self.postMessage(JSON.stringify(ans));
}


