localStorageCreation();
const input = document.querySelector(".container__input");
const submitBtn = document.querySelector(".container__btn");
const resultContainer = document.querySelector(".container__result");
// localStorage.todos = JSON.stringify([]);
const customImagesArray = [
  "./images/1.svg",
  "./images/2.svg",
  "./images/3.svg",
  "./images/4.svg",
  "./images/5.svg",
  "./images/6.svg",
  "./images/7.svg",
  "./images/8.svg",
  "./images/9.svg"
];
const colorArray = [
  "greenyellow",
  "orangered",
  "goldenrod",
  "violet",
  "royalblue"
];

function localStorageCreation() {
  if (localStorage.todos == null) {
    localStorage.todos = JSON.stringify([]);
  }
}

setInterval(localStorageCreation, 10000);

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();

  if (input.value !== "") {
    addTodo(input.value);
    input.value = "";
  }
});

function addTodo(input) {
  const todoArray = JSON.parse(localStorage.todos);
  todoArray.push(input);
  localStorage.todos = JSON.stringify(todoArray);

  show();
}

function show() {
  const todos = JSON.parse(localStorage.todos);

  const newTodo = todos
    .map((todo, index) => {
      let backgroundImages =
        customImagesArray[Math.floor(Math.random() * customImagesArray.length)];

      let color = colorArray[Math.floor(Math.random() * colorArray.length)];
      return `
    <div class="container__result--div" id="${index}" style="background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${backgroundImages});border-bottom:5px solid ${color}">
    <h3 class="container__heading--3">${todo}</h3>
    <a  class="container__close" data-close onclick="remove(this)">&times;</a>
  </div>
    `;
    })
    .join("");

  resultContainer.innerHTML = newTodo;
}

function remove(ob) {
  const todos = JSON.parse(localStorage.todos);
  let id = ob.parentElement.id;
  todos.splice(id, 1);
  localStorage.todos = JSON.stringify(todos);
  show();
}

// function getTodos() {
//   if (localStorage.todos === null) {
//     return (localStorage.todos = JSON.stringify([]));
//   } else {
//     return JSON.parse(localStorage.todos);
//   }
// }
// getTodos();

show();
