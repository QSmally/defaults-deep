
/*!
 * defaults-deep <https://github.com/jonschlinkert/defaults-deep>
 * This is a fork at https://github.com/QSmally/defaults-deep
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

"use strict";

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

/**
 * Does all the stuff!
 * @param {Object} Target Target object to execute and modify.
 * @param {...Object} Objects All the objects to merge into the Target.
 * @returns {Object} The merged objects.
 */
function DefaultsDeep(Target = {}, ...Objects) {
    if (!(Objects instanceof Array)) return Target;

    for (let i in Objects) {
        let Obj = Objects[i];
        if (Obj) Copy(Target, Obj);
    }

    return Target;
};

module.exports = DefaultsDeep;
