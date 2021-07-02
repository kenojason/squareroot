const number = prompt('please enter your number :');

let squareRoot = Math.sqrt(number);

const sqr = document.getElementById('sqr').innerHTML = `The square root of ${number} is ${squareRoot}`;
