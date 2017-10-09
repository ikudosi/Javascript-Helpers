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

if (typeof Array.prototype.contains === 'undefined') {
    Object.defineProperty(Array.prototype, 'contains', {
        enumerable: false,
        value: function value(needle) {
            var strictMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (strictMode) {
                return this.includes(needle);
            }
            return this.filter(function (item) {
                return item == needle;
            }).length > 0;
        }
    });
}
