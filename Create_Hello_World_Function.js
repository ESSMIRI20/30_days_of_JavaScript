var createHelloWorld = function() {
    
    return function(...args) {
        if (args.length >= 0 && args.length <= 10)
           return ("Hello World");
    }
};