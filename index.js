// 1) Function to calculate the difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}

// 2) Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}

// 3) Function to find the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4) Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5) Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// 6) Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; 
    return str.charAt().toLowerCase() + str.slice(1);
}

// 7) Function to count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 8) Function to find the average of an array of numbers
function findAverage(arr) {
    if (arr.length === 0) return 0; 
    const sum = arr.reduce((acc, num) => acc + num,0);
    return sum / arr.length;
}

// DOM Manipulation

document.getElementById('calcDiffBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const difference = calculateDifference(num1, num2);
    document.getElementById('calcDiffResult').textContent = `Difference: ${difference}`;
});

document.getElementById('checkOddBtn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('oddNum').value);
    const result = isOdd(number);
    document.getElementById('oddResult').textContent = `Is Odd: ${result}`;
});

document.getElementById('findMinBtn').addEventListener('click', function() {
    const numbers = document.getElementById('minArray').value.split(' ').map(Number);
    const minValue = findMin(numbers);
    document.getElementById('minResult').textContent = `Minimum: ${minValue}`;
});

document.getElementById('filterEvenBtn').addEventListener('click', function() {
    const numbers = document.getElementById('evenArray').value.split(' ').map(Number);
    const evenNumbers = filterEvenNumbers(numbers);
    document.getElementById('evenResult').textContent = `Even Numbers: ${evenNumbers.join(', ')}`;
  });
  
  document.getElementById('sortArrayBtn').addEventListener('click', function() {
    const numbers = document.getElementById('sortArray').value.split(' ').map(Number);
    const sortedNumbers = sortArrayDescending(numbers);
    document.getElementById('sortedResult').textContent = `Sorted Array: ${sortedNumbers.join(', ')}`;
  });
  
  document.getElementById('lowercaseBtn').addEventListener('click', function() {
    const str = document.getElementById('strInput').value;
    const lowercaseStr = lowercaseFirstLetter(str);
    document.getElementById('lowercaseResult').textContent = `Lowercase First Letter: ${lowercaseStr}`;
  });
  
  document.getElementById('countVowelsBtn').addEventListener('click', function() {
    const str = document.getElementById('vowelStr').value;
    const vowelCount = countVowels(str);

     // Find all vowels in the string
  let vowelsFound = "";
  const vowels = 'aeiouAEIOU';
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsFound += char + " "; 
    }
  }

    document.getElementById('vowelCountResult').textContent = `Vowel Count: ${vowelCount} : ${vowelsFound.trim()}`;
  });
  
  document.getElementById('findAvgBtn').addEventListener('click', function() {
    const numbers = document.getElementById('avgArray').value.split(' ').map(Number);
    const average = findAverage(numbers);
    document.getElementById('avgResult').textContent = `Average: ${average}`;
  });