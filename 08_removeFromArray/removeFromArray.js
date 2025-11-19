const removeFromArray = function (...args) {
  return args[0].filter(elem => !args.slice(1).includes(elem))
}

// Do not edit below this line
module.exports = removeFromArray
