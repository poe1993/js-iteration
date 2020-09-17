function yelling(words) {
  const newWords = words.map(element => element.toUpperCase())
  return newWords
}

function doubleTrouble(numbers) {
  const newNumbers = numbers.map(number => number * 2)
  return newNumbers
}

function stringyIndexes(strings) {
  const newStrings = strings.map(
    (string, index) => `${string} is at index ${index}`
  )

  return newStrings
}

function onlyTheEvenSurvive(numbers) {
  const newEvens = numbers.filter(number => number % 2 === 0)
  return newEvens
}

function onlyTheEvenIndexedSurvive(numbers) {
  const evenIndex = numbers.filter((number, index) => index % 2 === 0)
  return evenIndex
}

function bestMoviesOfTheYear(movies, yearToConsider) {
  const onlyMoviesFromTheYearAndScoreMoreThan90 = movies.filter(
    movie => movie.score > 90 && movie.year === yearToConsider
  )
  const movieNames = onlyMoviesFromTheYearAndScoreMoreThan90.map(
    movie => movie.name
  )
  return movieNames
}

function everyoneIsOdd(numbers) {
  const allOdd = numbers.every(number => number % 2 === 1)

  return allOdd
}

function findTheNeedle(strings) {
  const theStringThatContainsTheNeedleInside = strings.find(string =>
    string.includes('needle')
  )
  return theStringThatContainsTheNeedleInside
}

function findTheNeedleIndex(strings) {
  const theIndexThatContainsTheNeedleInside = strings.findIndex(string =>
    string.includes('needle')
  )
  return theIndexThatContainsTheNeedleInside
}

function someoneToLove(strings) {
  const fourCharactersLong = strings.some(string => string.length === 4)
  return fourCharactersLong
}

function objectKeys(objectOfHobbies) {
  const hobbyKeys = Object.keys(objectOfHobbies)
  const answer = hobbyKeys.map(
    hobbyKey => hobbyKey + ' - ' + objectOfHobbies[hobbyKey].title
  )
  return answer
}

const deepEqual = require('deep-equal')
const chalk = require('chalk')

const isDefined = method => {
  return eval(`typeof ${method}`) === 'function'
}

const compare = (received, expected) => {
  if (deepEqual(received, expected)) {
    return ''
  } else {
    return `Received: ${JSON.stringify(received)} but expected ${JSON.stringify(
      expected
    )}`
  }
}

const tests = [
  {
    methodName: 'yelling',
    test: () => {
      const received = yelling(['now', 'is', 'the', 'time'])
      const expected = ['NOW', 'IS', 'THE', 'TIME']

      return compare(received, expected)
    }
  },
  {
    methodName: 'doubleTrouble',
    test: () => {
      return compare(doubleTrouble([2, 3, 9, 0, -5]), [4, 6, 18, 0, -10])
    }
  },
  {
    methodName: 'stringyIndexes',
    test: () => {
      return compare(stringyIndexes(['how', 'now', 'brown', 'cow']), [
        'how is at index 0',
        'now is at index 1',
        'brown is at index 2',
        'cow is at index 3'
      ])
    }
  },
  {
    methodName: 'onlyTheEvenSurvive',
    test: () => {
      return compare(onlyTheEvenSurvive([42, 50, 100, 5, -43, 17, 44]), [
        42,
        50,
        100,
        44
      ])
    }
  },
  {
    methodName: 'onlyTheEvenIndexedSurvive',
    test: () => {
      return compare(
        onlyTheEvenIndexedSurvive([
          31,
          67,
          64,
          96,
          14,
          24,
          43,
          51,
          48,
          80,
          58,
          43,
          64,
          84,
          98,
          99,
          69,
          93,
          5,
          32,
          29,
          4,
          28,
          18,
          86,
          22,
          20,
          74,
          35,
          27,
          85,
          79,
          65,
          32,
          56,
          94,
          93,
          20,
          29,
          22,
          72
        ]),
        [
          31,
          64,
          14,
          43,
          48,
          58,
          64,
          98,
          69,
          5,
          29,
          28,
          86,
          20,
          35,
          85,
          65,
          56,
          93,
          29,
          72
        ]
      )
    }
  },
  {
    methodName: 'bestMoviesOfTheYear',
    test: () => {
      const movies = [
        { name: 'The Grand Budapest Hotel', year: 2014, score: 91 },
        { name: 'Birdman', year: 2014, score: 91 },
        { name: 'Transformers: Age of Extinction', year: 2014, score: 18 },
        { name: 'Rage', year: 2014, score: 14 },
        { name: 'Get Out', year: 2017, score: 99 },
        { name: 'Justice League', year: 2017, score: 40 },
        { name: 'Ghost in the Shell', year: 2017, score: 46 },
        { name: 'The Big Sick', year: 2017, score: 98 }
      ]
      return (
        compare(bestMoviesOfTheYear(movies, 2014), [
          'The Grand Budapest Hotel',
          'Birdman'
        ]) ||
        compare(bestMoviesOfTheYear(movies, 2017), [
          'Get Out',
          'The Big Sick'
        ]) ||
        compare(bestMoviesOfTheYear(movies, 2001), [])
      )
    }
  },
  {
    methodName: 'everyoneIsOdd',
    test: () => {
      return (
        compare(everyoneIsOdd([9, 15, 27, 101, 33]), true) ||
        compare(everyoneIsOdd([9, 23, 3, 4, 77]), false)
      )
    }
  },
  {
    methodName: 'findTheNeedle',
    test: () => {
      return compare(
        findTheNeedle(['one', 'time', 'there was a needle at', 'the market']),
        'there was a needle at'
      )
    }
  },
  {
    methodName: 'findTheNeedleIndex',
    test: () => {
      return compare(
        findTheNeedleIndex([
          'one',
          'time',
          'there was a needle at',
          'the market'
        ]),
        2
      )
    }
  },
  {
    methodName: 'someoneToLove',
    test: () => {
      return (
        compare(someoneToLove(['how', 'now', 'brown', 'cow']), false) ||
        compare(someoneToLove(['how', 'now', 'blue', 'cow']), true)
      )
    }
  },
  {
    methodName: 'objectKeys',
    test: () => {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max))
      }

      const objectOfHobbies = {
        [`hobby-${getRandomInt(500)}`]: {
          title: `Panda ${getRandomInt(500)} Bears`,
          description: `Pandas are bears native to south-central China, and are objectively the cutest animals on earth. ${getRandomInt(
            500
          )}`
        },
        miniatures: {
          title: `Miniature ${getRandomInt(500)} Painting`,
          description: `I enjoy painting miniatures from board games. I've been painting since early 2018, here's some of my work. ${getRandomInt(
            500
          )}`
        }
      }

      const answer = Object.keys(objectOfHobbies).map(
        key => `${key} - ${objectOfHobbies[key].title}`
      )
      return compare(objectKeys(objectOfHobbies), answer)
    }
  }
]

const longestTestName = Math.max(...tests.map(test => test.methodName.length))

const runOneTest = testCase => {
  try {
    if (!isDefined(testCase.methodName)) {
      return 'undefined'
    }

    return testCase.test()
  } catch {
    return 'Some kind of syntax or other code error'
  }
}

let totalPassing = 0

console.clear()
tests.forEach(test => {
  const paddedTestName =
    test.methodName + ' '.repeat(longestTestName - test.methodName.length)

  const testResult = runOneTest(test)

  switch (testResult) {
    case 'undefined':
      console.log(chalk.yellow(`${paddedTestName} ⚡️⚡️ not defined️ ⚡️️⚡️`))
      break
    case '':
      totalPassing++
      console.log(chalk.green(`${paddedTestName} pass`))
      break
    default:
      console.log(chalk.red(`${paddedTestName} ${testResult}`))
      break
  }
  console.log()
})

console.log('\n\n')
if (totalPassing === tests.length) {
  console.log(chalk.green('CONGRATULATIONS! All methods work!'))
} else {
  console.log(
    chalk.yellow(
      'At least one method is not working ... keep going. You got this!'
    )
  )
}
