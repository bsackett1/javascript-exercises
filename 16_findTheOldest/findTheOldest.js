const findTheOldest = function (people) {
  return people.reduce((person, curr) =>
    getAge(person) > getAge(curr) ? person : curr
  )
}

function getAge (person) {
  return person.yearOfDeath
    ? person.yearOfDeath - person.yearOfBirth
    : thisYear - person.yearOfBirth
}

const thisYear = new Date().getFullYear()

// Do not edit below this line
module.exports = findTheOldest
