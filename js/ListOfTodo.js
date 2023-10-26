import { CreateElements } from "./componnents/CreateElements.js";
/**
 * @typedef {object} ListOfTodo
 * @param {string} todo
 */

export class ListOfTodo {
  /**
   * @param {String?} #todo
   */
  #todo;
  constructor(todo) {
    this.#todo = todo;
    const containerList = document.querySelector("#container-list");
    const deleteButton = CreateElements("button", {
      class: "fa-delete",
    });
    const task = CreateElements("li", {
      class: "task-li",
    });
    if (this.#todo) {
      task.innerText = this.#todo;
      containerList.append(task);
      task.append(deleteButton);
    }
    deleteButton.addEventListener("click", (e) => this.deleteTask(e));
  }

  deleteTask(e) {
    e.preventDefault();
    e.currentTarget.parentNode.remove();
  }
}
