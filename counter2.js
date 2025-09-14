var createCounter = function(init) {
    let m = init;
    return{
        increment()
        {
            init++;
            return (init);
        },
        decrement()
        {
            init--;
            return (init);
        },
        reset()
        {
            init = m;
            return (init);
        }
    }
};