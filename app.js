window.onload = () => {
  console.log("Merry Christmas");
  show();
};

const todo = new Todo();

// DOM
const input = document.querySelector(".container__input");
const submitBtn = document.querySelector(".container__btn");
const resultContainer = document.querySelector(".container__result");

// add todo
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  todo.addTodos(input.value);
  input.value = "";
});

// custom
const customImagesArray = [
  "./images/1.svg",
  "./images/2.svg",
  "./images/3.svg",
  "./images/4.svg",
  "./images/5.svg",
  "./images/6.svg",
  "./images/7.svg",
  "./images/8.svg",
  "./images/9.svg",
];
const colorArray = [
  "greenyellow",
  "orangered",
  "goldenrod",
  "violet",
  "royalblue",
];

// show todo
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
    <div class="container__heading--wrapper">
    <h3 class="container__heading--3">${todo}</h3>
    </div>
    <a  class="container__close" data-close onclick="todo.removeTodos(this.parentElement.id)">&times;</a>
  </div>
    `;
    })
    .join("");

  resultContainer.innerHTML = newTodo;
}
