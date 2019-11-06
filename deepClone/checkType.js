const isType = (obj, type) => {
    if (typeof obj !== 'object') return false;
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
        case 'Array':
            flag = typeString === '[object Array]';
            break;
        case 'Date':
            flag = typeString === '[object Date]';
            break;
        case 'RegExp':
            flag = typeString === '[object RegExp]';
            break;
        case 'Object':
            flag = typeString === '[object Object]';
            break;
        default:
            flag = false;
    }
    return flag;
};

// export default isType ; node不支持import引入js文件
module.exports = isType