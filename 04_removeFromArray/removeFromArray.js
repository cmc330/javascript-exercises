const removeFromArray = function(arr, ...args) {
    let modArr = [...arr];
  
  for (let i = 0; i < args.length; i++) {
    if (modArr.includes(args[i])) {
      modArr.splice(modArr.indexOf(args[i]), 1)
    } 
  }
  return modArr;
};

module.exports = removeFromArray;
