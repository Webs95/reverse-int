module.exports = function reverse(n) {
    return parseInt(n.toString(10).split("").reverse().join(""), 10);
};
