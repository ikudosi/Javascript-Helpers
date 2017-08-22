if (typeof window['object_get'] === 'undefined') {
    window.object_get = function object_get(obj, key) {
        var targetKeys = key.split('.');

        if ((Object.keys(obj).length === 0 && obj.constructor === Object) ||
            targetKeys.length === 0 ||
            typeof obj[targetKeys[0]] === 'undefined'
        ) {
            return null;
        }

        var target = obj[targetKeys[0]];

        if (targetKeys.length === 1) {return target;}

        for (var i = 1; i <= targetKeys.length; i++) {
            if (i + 1 > targetKeys.length) {break;}
            if (typeof target[targetKeys[i]] !== 'undefined') {
                target = target[targetKeys[i]];
            } else {
                target = null;
                break;
            }
        }

        return target;
    }
}
