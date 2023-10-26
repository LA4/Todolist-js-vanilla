import { ListOfTodo } from "./ListOfTodo.js";
import { CreateElements } from "./componnents/CreateElements.js";

export class todo {
  constructor(todo) {
    const formTodo = document.querySelector("#form-todo");
    formTodo.addEventListener("submit", (e) => this.handleSubmit(e));
    const deleteTask = document.querySelector(".delete-task");
    deleteTask.addEventListener("click", (e) => this.deleteTasks());
    const deletecheckedTask = document.querySelector(".delete-task-cheked");
    deletecheckedTask.addEventListener("click", (e) =>
      this.deleteCheckedTodos(e)
    );
    const deleteUnCheckedTask = document.querySelector(".delete-task-uncheked");
    deleteUnCheckedTask.addEventListener("click", (e) =>
      this.deleteUnCheckedTodos(e)
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    const task = new FormData(e.currentTarget)
      .get("todoElement")
      .toString()
      .trim();
    if (task === "") {
      return;
    }
    e.currentTarget.reset();
    new ListOfTodo(task);
  }

  deleteTasks(e) {
    const tasks = document.querySelectorAll(".task-li");
    for (const task of tasks) {
      task.remove();
    }
  }
  deleteCheckedTodos(e) {
    const tasks = document.querySelectorAll(".checked");
    for (const task of tasks) {
      task.remove();
    }
  }
  deleteUnCheckedTodos(e) {
    const tasks = document.querySelectorAll(".task-li");
    for (const task of tasks) {
      if (!task.classList.contains("checked")) {
        task.remove();
      }
    }
  }
}
new todo();
