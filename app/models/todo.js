export default class Todo {
  constructor(data) {
    this.description = data.description,
      this.completed = data.completed || false;
    this._id = data._id
  }
  get Template() {
    return `
    <div class = "d-flex flex-row">
      <img src = "assets/${this.completed}.png" onclick = "app.todoController.toggleTodoStatus('${this._id}')" class = "img-fluid checkbox">
      <p>${this.description}</p> <button class = "btn btn-danger" onclick = "app.todoController.removeTodo('${this._id}')">Delete</button>
      </div>
    `
  }
}
