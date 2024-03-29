const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

console.log('hello');

// Interpolated

console.log('Hello! You are %s string', '😸')

// Styled

console.log('%c I am a great text', 
'font-size:30px; background: red; text-shadow: 10px 10px 0 green;' )

// warning!

console.warn('OOOH NOO!');

// Error :|

console.error('oh men!');

// Info

console.info('Crocodrile eat 3-4 people per year');


// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing

console.clear();

// Viewing DOM Elements

console.log(p);
console.dir(p);
console.clear();

// Grouping together

dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} years old`);
    console.groupEnd(`${dog.name}`);
})

// counting

console.count('Juan');
console.count('Juan');
console.count('Juan');
console.count('Juan');
console.count('Caleb');
console.count('Caleb');
console.count('Caleb');
console.count('Caleb');
console.count('Caleb');
console.count('Caleb');
console.count('Fernando');
console.count('Fernando');
console.count('Fernando');
console.count('Fernando');
console.count('Fernando');
console.count('Fernando');
console.count('Fernando');

// timing

console.time('Fetching data');
fetch('https://www.linkedin.com/in/raveloswaldo/')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });