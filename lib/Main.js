
/*!
 * defaults-deep <https://github.com/jonschlinkert/defaults-deep>
 * This is a fork at https://github.com/QSmally/defaults-deep
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

"use strict";

// function DefaultsDeep(target, objects) {
//     target = target || {};

//     function copy(target, current) {
//         lazy.forOwn(current, function (value, key) {
//         if (key === '__proto__') {
//             return;
//         }

//         var val = target[key];
//         // add the missing property, or allow a null property to be updated
//         if (val == null) {
//             target[key] = value;
//         } else if (lazy.isObject(val) && lazy.isObject(value)) {
//             defaultsDeep(val, value);
//         }
//         });
//     }

//     var len = arguments.length, i = 0;
//     while (i < len) {
//         var obj = arguments[i++];
//         if (obj) {
//         copy(target, obj);
//         }
//     }
//     return target;
// }

/**
 * Does all the stuff!
 * @param {Object} Target Target object to execute and modify.
 * @param {...Object} Objects All the objects to merge into the Target.
 * @returns {Object} The merged objects.
 */
function DefaultsDeep(Target = {}, Objects) {
    function Copy(Target, Current) {
        Object.keys(Current).forEach(Key => {
            const Value = Current[Key];
            if (!Current.hasOwnProperty(Key)) return;
            if (Key === "__proto__") return;
            
            const Val = Target[Key];
            if (Val == null) Target[Key] = Value;
            else if (typeof Value === "object") DefaultsDeep(Val, Value);
        });
    }

    let len = arguments.length, i = 0;
    while (i < len) {
        let Obj = arguments[i++];
        if (Obj) Copy(Target, Obj);
    }

    return Target;
};

module.exports = DefaultsDeep;
