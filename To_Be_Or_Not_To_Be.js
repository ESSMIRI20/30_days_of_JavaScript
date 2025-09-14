var expect = function(val) {
    return {
        toBe : function (v)
        {
            if (v === val)
                return (true);
            else
                throw new Error ("Not Equal");
        },
        notToBe : function (v)
        {
            if (v === val)
                throw new Error ("Equal");
            else
                return (true);
        }
    }
};