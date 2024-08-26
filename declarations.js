const escapeStr = "`, \\, /, \", '";

const arr = [4, '2'];
//Object.freeze(arr);

const obj = {
    str: "val",
    num: 17,
    bool: true,
    undef: undefined,
}
//Object.freeze(obj);

const nested = {
    arr: [4, undefined, '2'],
    obj : {
        str: "hello",
        num: 3,
        bool: false,
    }
}
//console.log(nested);
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr)
//console.log(Object.isFrozen(nested.Obj))