let reviews = [
  {
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias dolorum error accusamus explicabo placeat, dicta eaque voluptates itaque cum culpa illum quae maxime!',
    author: 'james baldwin',
  },
  {
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum!',
    author: 'peter druery',
  },
  {
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias dolorum error accusamus explicabo placeat',
    author: 'sanchez',
  },
  {
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: 'james rodriguez',
  },
];

let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let text = document.querySelector('.text');
let name = document.querySelector('.name');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

function showPerson() {
  let item = reviews[currentItem];
  text.textContent = item.info;
  name.innerHTML = `<em>${' - ' + item.author}</em>`;
}

leftBtn.addEventListener('click', function () {
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  currentItem--;
  showPerson();
  console.log('it works');
});

rightBtn.addEventListener('click', function () {
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  currentItem++;
  showPerson();
  console.log('it also works');
});

// write a program that at first you need to click buttons next and previous to move from one picture to the other
//then remove the buttons, and set a time for seven seconds to move itself

//select elements
const gallery = document.querySelector('.gallery');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

// set a starting point
const counter = 0;

// set an iteration for the gallery

// add event listeners for the buttons
previous.addEventListener('click', function () {});
next.addEventListener('click', function () {});

// the function/logic that makes the images move when the buttons are clicked
// an if else statement
