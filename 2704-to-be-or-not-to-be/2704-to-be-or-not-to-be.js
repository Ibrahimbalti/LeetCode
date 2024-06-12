/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:function(val1){
            if(val1===val){
                return true
            } else {
                 throw new Error("Not Equal");
            }
        },
        notToBe:function(val1){
            if(val1!==val){
                return true
            } else {
                 throw new Error("Equal")
            }
        },
    }
};


try{
expect(5).toBe(5); // true
 expect(5).notToBe(5);
} catch(error){
console.log("Error___",error)
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */