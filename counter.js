var createCounter = function(n) {
    let m = n - 1;
    return function() {
        m++;
        return (m);
    };
};