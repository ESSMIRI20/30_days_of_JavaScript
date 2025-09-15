function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = args.join(",");
        if(key in cache)
            return (cache[key]);
        cache[key] = fn(...args);
        return (cache[key]);
    }
}