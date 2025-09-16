var cancellable = function(fn, args, t) {
    let i = 1;
    let timeouts = [];
    fn(...args);
    while (i <= 6){
        let timeId = setTimeout(() => fn(...args), t * i);
        timeouts.push(timeId);
        i++;
    }
    
        return () =>{
            for (i = 0; i < 6 ; i++)
                clearTimeout(timeouts[i])
        }
};