module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error;
    }



    let result = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "--discard-next":
                i++;
                break;
            case '--discard-prev':
                result.pop();
            case "--double-next":
                result.push(i++);
            case "--double-prev":
                result.pop(i++);
            default:
                result.push(arr[i]);
                break;
        }
    }
    return result;
};



