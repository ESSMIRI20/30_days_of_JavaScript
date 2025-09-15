var once = function(fn) {
    
    let check = 0;
    return function(...args){
        if(check == 0)
        {
            check = 1;
            return (fn(...args));
        }
        return (undefined);
    }
};