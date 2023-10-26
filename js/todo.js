import { ListOfTodo } from "./ListOfTodo.js";

export class todo {
  constructor(todo) {
    const inputTodo = document.querySelector("#input-todo");
    inputTodo.addEventListener("change", (e) => this.addTask(e));
  }
  addTask(e) {
    let toto = e.currentTarget.value;
    new ListOfTodo(toto);
  }
}
new todo();
