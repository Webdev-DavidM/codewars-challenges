function sumCubes(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i * i * i;
  }
  return total;
}

console.log(sumCubes());

function solution(digits) {
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5); //each loop iteration pulls the next 5 digits into a substring
    if (Number(number) > answer) {
      //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}

//    once i have the completed array, get the length and go back 5 and return this
//   as it will be the highest 5 consecutive numbers

function sumTwoSmallestNumbers(numbers) {
  let lowestTwoNumbers = numbers.sort((a, b) => {
    return a - b;
  });
  return lowestTwoNumbers[0] + lowestTwoNumbers[1];
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

//round up to the next integer //
function roundToNext5(n) {
  let number = 0;
  let newNumber = n;
  // below will add a number going up from 1-5 and then work out if it
  // divide into 5 and create 0 using the % remainer operator
  for (let d = 0; newNumber % 5 !== 0; d++) {
    newNumber += 1;
  }

  return newNumber;
}

// better solution //
function roundToNext5(n) {
  while (n % 5 !== 0) n++;
  return n;
}

console.log(roundToNext5(-2));

// sum of a sequence //
const sequenceSum = (begin, end, step) => {
  var sum = 0;
  for (var i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

console.log(sequenceSum(2, 6, 2));

//fix my method

function myFunction() {
  var myObject = {
    objProperty: 'string',
    objMethod() {
      return myObject.objProperty;
    },
  };
  return myObject;
}

console.log(myFunction().objMethod());

// break camel case //

function solution(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i).toUpperCase() === string.charAt(i)) {
      newString += ` ${string.charAt(i)}`;
    } else {
      newString += `${string.charAt(i)}`;
    }
  }
  return newString;
}

console.log(solution('camelCase'));

//count the divisors of a number //
function getDivisorsCnt(n) {
  let noOfDivisors = 0;
  let divisor = n;
  do {
    n % divisor === 0 && noOfDivisors++;
    divisor--;
  } while (divisor > 0);
  return noOfDivisors;
}
console.log(getDivisorsCnt(5));

//Two to one //

function longest(s1, s2) {
  let combinedString = Array.from(s1 + s2);
  let answer = combinedString.reduce((a, b) => {
    return a.includes(b) === false ? [...a, b] : [...a];
  }, []);
  return answer.sort().join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'));

// factorial //
function factorial(n) {
  let result = null;
  if (n < 0 || n > 12) {
    throw new RangeError();
  } else if (n === 0) {
    result = 1;
  } else {
    let numberArray = [];
    do {
      numberArray.push(n);
      n--;
    } while (n > 0);
    result = numberArray.reduce((a, b) => a * b);
  }
  return result;
}
console.log(factorial(10));

//love or friendship
function wordsToMarks(string) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return [...string].reduce((total, firstValue) => {
    return total + alphabet.indexOf(firstValue) + 1;
  }, 0);
}
console.log(wordsToMarks('abc'));

// Speed control //
function gps(s, x) {
  let averageSpeeds = x.map((speed, index) => {
    return (3600 * (x[index + 1] - speed)) / s;
  });
  averageSpeeds = averageSpeeds.slice(0, x.length - 1);
  return x.length < 2 ? 1 : Math.floor(averageSpeeds.sort((a, b) => b - a)[0]);
}

console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));

// sum of all the multiples of 3 and 5   //

function findSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
      return total;
    }
  }
}
console.log(findSum(10));

// most digits //
function findLongest(array) {
  let longest = array.sort((a, b) => b.toString().length - a.toString().length);
  return parseInt(longest[0]);
}

console.log(findLongest([1, 10, 100]));
