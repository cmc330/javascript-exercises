

const repeatString = function(str, num) {

    return  (str === "") ? ''
            :(num < 0) ? "ERROR"
            : (num == 0) ? ''
            : str.repeat(num);
};

module.exports = repeatString;
