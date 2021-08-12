const sumAll = function(num1, num2) {
    const range = (start, stop) => Array.from(
        {length: (stop - start) + 1}, (_, i) => start + i);
      let begin = 0;
      let end = 0;
        if ((num1 < 1) || (num2 < 1)) {
          return 'ERROR';
        } else if (typeof(num1) !== 'number' || 
           typeof(num2) !== 'number'){
             return 'ERROR';
           } else if (num1 > num2){
             (begin = num2) && (end = num1)
           } else {
             (begin = num1) && (end = num2)
           }
        let arr = range(begin, end);
        return arr.reduce((x,y) => x + y);
    
};

module.exports = sumAll;
