var Todo = /** @class */ (function () {
    function Todo() {
        if (!localStorage.getItem("todos")) {
            localStorage.setItem("todos", JSON.stringify([]));
        }
        this._todos = JSON.parse(localStorage.getItem("todos"));
    }
    Todo.prototype.render = function () {
        this._todos = JSON.parse(localStorage.getItem("todos"));
        return this._todos
            .map(function (todo) { return "\n      <div class=\"container__result--div\" id=" + todo.id + ">\n          <h3 class=\"container__heading--3\">" + todo.text + "</h3>\n          <a href=\"#\" class=\"container__close\" >&times;</a>\n        </div>\n      "; })
            .join("");
    };
    Todo.prototype.addTodo = function (todo) {
        this._todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(this._todos));
    };
    Todo.prototype.removeTodo = function (id) {
        this._filterArray = this._todos.filter(function (todo) { return todo.id !== id; });
        localStorage.setItem("todos", JSON.stringify(this._filterArray));
    };
    return Todo;
}());
// implementation
var todo = new Todo();
var input = document.querySelector(".container__input");
var submitBtn = document.querySelector(".container__btn");
var resultContainer = document.querySelector(".container__result");
resultContainer.innerHTML = todo.render();
removeButtonCapture();
function removeButtonCapture() {
    var buttons = document.querySelectorAll(".container__close");
    buttons.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            todo.removeTodo(parseInt(e.target.parentElement.id));
            resultContainer.innerHTML = todo.render();
            removeButtonCapture();
        });
    });
}
submitBtn.addEventListener("click", function (e) {
    if (input.value) {
        var todoObj = {
            id: Math.floor(Math.random() * 900),
            text: input.value,
            done: false
        };
        todo.addTodo(todoObj);
        resultContainer.innerHTML = todo.render();
        removeButtonCapture();
    }
});
console.log("%cTypescript", "font-size:30px;color:#007acc;");
