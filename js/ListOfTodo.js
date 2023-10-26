import { CreateElements } from "./componnents/CreateElements.js";
/**
 * @typedef {object} ListOfTodo
 * @param {string} todo
 */

export class ListOfTodo {
  /** @param {String?} #todo*/
  #todo;
  /** @param {HTMLElement}   */
  #task;
  constructor(todo) {
    this.#todo = todo;
    const containerList = document.querySelector("#container-list");
    const deleteButton = CreateElements("button", {
      class: "fa-delete",
    });
    const task = CreateElements("li", {
      class: "task-li",
    });
    this.#task = task;
    const checkbox = CreateElements("input", {
      type: "checkbox",
    });
    if (this.#todo) {
      containerList.prepend(task);
      this.#task.innerText = this.#todo;
      this.#task.append(deleteButton);
      this.#task.prepend(checkbox);
    }
    deleteButton.addEventListener("click", (e) => this.deleteTask(e));
    checkbox.addEventListener("change", (e) => this.toggleCheck());
  }

  deleteTask(e) {
    e.preventDefault();
    e.currentTarget.parentNode.remove();
  }
  toggleCheck() {
    this.#task.classList.toggle("checked");
  }
}
