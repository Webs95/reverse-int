module.exports = function reverse(n) {
    const result = n.toString(10).split("").reverse().join("");
    return parseInt(result, 10);
};
