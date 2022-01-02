interface Object {
    getShortKeys(this: object): string[];
}

Object.prototype.getShortKeys = function () {
    return Object.keys(this).filter(key => key.length <= 3);
}

const obj: object = {
    a: 1,
    bb: 2,
    ccc: 3,
    dddd: 4,
}

console.log(obj.getShortKeys());
