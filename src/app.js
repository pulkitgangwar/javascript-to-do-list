import store, { addTodo, removeTodo } from "./store";
import { v4 as uuidv4 } from "uuid";

window.onload = function () {
  render();
};

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

// render method
function render() {
  const todos = JSON.parse(localStorage.todos);

  const newTodo = todos
    .map((todo) => {
      let backgroundImages =
        customImagesArray[Math.floor(Math.random() * customImagesArray.length)];

      let color = colorArray[Math.floor(Math.random() * colorArray.length)];
      return `
        <div class="container__result--div" id="${todo.id}" style="background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.5),
          rgba(255, 255, 255, 0.5)
        ),
        url(${backgroundImages});border-bottom:5px solid ${color}">
        <div class="container__heading--wrapper">
        <h3 class="container__heading--3">${todo.todo}</h3>
        </div>
        <a  class="container__close">&times;</a>
      </div>
        `;
    })
    .join("");

  resultContainer.innerHTML = newTodo;
  removeButtonCapture();
}

// remove button capture
const removeButtonCapture = () => {
  const removeButtons = document.querySelectorAll(".container__close");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const id = e.target.parentElement.id;
      store.dispatch(removeTodo(id));
    });
  });
};

// subscribing to store
store.subscribe(render);

// DOM
const input = document.querySelector(".container__input");
const form = document.querySelector(".form");
const resultContainer = document.querySelector(".container__result");

// add todo
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo = {
    id: uuidv4(),
    todo: input.value,
  };
  store.dispatch(addTodo(newTodo));
  input.value = "";
});
