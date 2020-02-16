export default class Todo {
  constructor(data) {
    this.description = data.description,
      this.completed = data.completed || false;
    this._id = data._id
  }
  get Template() {
    return `
    <div class = "d-flex align-items-center justify-content-around mb-1 mt-1">
      <img src = "assets/${this.completed}.png" onclick = "app.todoController.toggleTodoStatus('${this._id}')" class = "img-fluid checkbox">
      <p class = "mb-0 ml-1">${this.description}</p><img src = "assets/delete.png" onclick = "app.todoController.removeTodo('${this._id}')" class = "img-fluid delete">
      </div>
    `
  }
}
