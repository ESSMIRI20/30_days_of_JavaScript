var cancellable = function(fn, args, t) {
    const timeid = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timeid);
};