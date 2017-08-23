if (typeof Object.get === 'undefined') {
    Object.get = function (mainObj, key) {
        let recursive = function (obj, keys) {
            if (Object.keys(obj).length === 0 || keys.length === 0 || keys[0] in obj === false) {
                return null;
            }
            if (keys.length === 1) {return obj[keys[0]];}
            if (keys[0] in obj) {
                return recursive(obj[keys[0]], keys.splice(1));
            }
        }
        return recursive(mainObj, key.split('.'));
    }
}
