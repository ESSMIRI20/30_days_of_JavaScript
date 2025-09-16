var cancellable = function(fn, args, t) {
    let i = 0;
    let timeout = 0;
    let timeouts = [];
    while (timeout < 6 * t){
        let timeId = setTimeout(() => fn(...args), timeout);
        timeouts.push(timeId);
        timeout += t;
    }
    
        return () =>{
            for (i = 0; i < 6 ; i++)
                clearTimeout(timeouts[i])
        }
};