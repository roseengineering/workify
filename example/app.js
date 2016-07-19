
var work = require('workify');
var w = work('gcd');
    
function gcd(a, b, callback){
    var data = [].slice.call(arguments);
    w.postMessage(JSON.stringify(data));
    w.onmessage = function(e){
        callback(JSON.parse(e.data));
    };
}

gcd(1071, 462, function(ans){
    console.log('The GCD is', ans);
});
 

