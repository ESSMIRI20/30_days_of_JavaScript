function join(arr1, arr2) {
    const map = new Map();

    for (const obj of arr1) {
        map.set(obj.id, {...obj});
    }

    for (const obj of arr2) {
        if (map.has(obj.id)) {
            map.set(obj.id, {...map.get(obj.id), ...obj});
        } else {
            map.set(obj.id, {...obj});
        }
    }

    return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

const arr1 = [{"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 3, "y": 6}];
const arr2 = [{"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0}];

const ret = join(arr1, arr2);
console.log(ret);
