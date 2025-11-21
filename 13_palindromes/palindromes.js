const palindromes = function (str) {
  let filtered = str
    .toLowerCase()
    .split('')
    .filter(letter => isAlphanumeric(letter))
    .join('')
  let l = 0
  let r = filtered.length - 1
  while (l < r) {
    if (filtered[l] != filtered[r]) {
      return false
    }
    l++
    r--
  }
  return true
}

function isAlphanumeric (str) {
  return /^[a-zA-Z0-9]+$/.test(str)
}

// Do not edit below this line
module.exports = palindromes
