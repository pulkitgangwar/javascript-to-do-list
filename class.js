class Todo {
  constructor() {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    }

    this.todoArray = JSON.parse(localStorage.getItem("todos"));
  }

  addTodos(todo) {
    this.todoArray.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todoArray));
    show();
  }

  removeTodos(id) {
    this.todoArray.splice(id, 1);
    localStorage.setItem("todos", JSON.stringify(this.todoArray));
    show();
  }
}
