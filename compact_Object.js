function compactObject(obj) {
    if (!obj) return obj;

    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)  
            .filter(Boolean);      
    }

    if (typeof obj === 'object') {
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            const compacted = compactObject(value);
            if (Boolean(compacted)) {
                result[key] = compacted;
            }
        }
        return result;
    }

    return obj;
}
