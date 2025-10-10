function sortBy(arr, fn) {
    return [...arr].sort((a, b) => fn(a) - fn(b));
}

const arr1 = [5, 4, 1, 2, 3];
console.log(sortBy(arr1, x => x));

const arr2 = [{x: 1}, {x: 0}, {x: -1}];
console.log(sortBy(arr2, d => d.x));

const arr3 = [[3, 4], [5, 2], [10, 1]];
console.log(sortBy(arr3, x => x[1]));
