interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

class Todo {
  _todos: ITodo[];
  _filterArray: ITodo[];

  constructor() {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    }

    this._todos = JSON.parse(localStorage.getItem("todos"));
  }

  render(): string {
    this._todos = JSON.parse(localStorage.getItem("todos"));
    return this._todos
      .map(
        (todo: ITodo) => `
      <div class="container__result--div" id=${todo.id}>
          <h3 class="container__heading--3">${todo.text}</h3>
          <a href="#" class="container__close" >&times;</a>
        </div>
      `
      )
      .join("");
  }

  addTodo(todo: ITodo): void {
    this._todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this._todos));
  }

  removeTodo(id: number): void {
    this._filterArray = this._todos.filter((todo) => todo.id !== id);

    localStorage.setItem("todos", JSON.stringify(this._filterArray));
  }
}

// implementation

const todo = new Todo();

const input: HTMLInputElement = document.querySelector(
  ".container__input"
) as HTMLInputElement;
const submitBtn: HTMLButtonElement = document.querySelector(
  ".container__btn"
) as HTMLButtonElement;
const resultContainer: HTMLDivElement = document.querySelector(
  ".container__result"
) as HTMLDivElement;

resultContainer.innerHTML = todo.render();
removeButtonCapture();

function removeButtonCapture() {
  const buttons = document.querySelectorAll(".container__close");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e: any) {
      todo.removeTodo(parseInt(e.target.parentElement.id));
      resultContainer.innerHTML = todo.render();
      removeButtonCapture();
    });
  });
}

submitBtn.addEventListener("click", function (e) {
  if (input.value) {
    const todoObj: ITodo = {
      id: Math.floor(Math.random() * 900),
      text: input.value,
      done: false,
    };

    todo.addTodo(todoObj);
    resultContainer.innerHTML = todo.render();
    removeButtonCapture();
  }
});

console.log("%cTypescript", "font-size:30px;color:#007acc;");
