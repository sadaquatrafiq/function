// Assignment # 35-38 (Function)
// Q#1
function displayDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.write(`Current date and time: ${date} ${time}`);
}

displayDateTime();

//   Q#2
function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(`Hello, ${fullName}!`);
}
greetUser('John', 'Doe');

//   Q#3
function addNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addNumbers(5, 7);
console.log(`The sum of the two numbers is ${sum}`);

//   Q#4
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operator');
    }
    document.write("<br>", `Result: ${result}`);
}
calculate(5, 7, '+');

//   Q#5
function square(num) {
    return num * num;
}
const result = square(5);
console.log(`The square of the number is ${result}`);

//   Q#6
function factorial(num) {
    if (num < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    } else if (num === 0) {
        console.log(`The factorial of ${num} is 1.`);
    } else {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${num} is ${fact}.`);
    }
}
factorial(5);

//   Q#7
function displayCount(start, end) {
    let i = start;
    const intervalId = setInterval(() => {
        if (i > end) {
            clearInterval(intervalId);
        } else {
            document.write(`${i}<br>`);
            i++;
        }
    }, 1000);
}
displayCount(1, 10);

//   Q#8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    console.log(`The hypotenuse of the right-angled triangle is ${hypotenuse}.`);
}
calculateHypotenuse(3, 4);

//   Q#9
function calculateArea(width, height) {
    const area = width * height;
    console.log(`The area of the rectangle is ${area}.`);
}
calculateArea(5, 7);

//   Q#10
function isPalindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

//   Q#11
function capitalizeFirstLetter(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

//   Q#12
function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}
// Q#13
function countOccurrences(str, letter) {
    let re = new RegExp(letter, 'g');
    let matches = str.match(re);
    return matches ? matches.length : 0;
}
// Q#14
function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    return `The circumference is ${circumference.toFixed(2)}`;
}

function calcArea(radius) {
    let area = Math.PI * radius ** 2;
    return `The area is ${area.toFixed(2)}`;
}
