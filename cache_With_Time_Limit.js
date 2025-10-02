var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    let existed = false;

    if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expire > now) {
            existed = true;
        }
    }

    this.cache.set(key, {
        value: value,
        expire: now + duration
    });

    return existed;
};

/** 
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expire > now) {
            return entry.value;
        } else {
            this.cache.delete(key);
        }
    }
    return -1;
};

/** 
 * @return {number}
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let cnt = 0;
    for (let [key, entry] of this.cache) {
        if (entry.expire > now) {
            cnt++;
        } else {
            this.cache.delete(key);
        }
    }
    return cnt;
};
