function isNumber(obj) {
    return typeof obj === 'number' && !isNaN(obj);
}

module.exports = (obj) => {
    return obj && isNumber(obj.xPos) && isNumber(obj.yPos);
};