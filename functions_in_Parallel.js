var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let completed = 0;
        let rejected = false;

        functions.forEach((fn, i) => {
            fn()
                .then(value => {
                    if (rejected) return;
                    results[i] = value;
                    completed++;
                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(err => {
                    if (!rejected) {
                        rejected = true;
                        reject(err);
                    }
                });
        });

        if (functions.length === 0) {
            resolve([]);
        }
    });
};
