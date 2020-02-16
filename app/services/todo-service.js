import store from "../store.js";
import Todo from "../models/todo.js"
// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/bradley/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get("")
      .then(res => {
        let todos = res.data.data.map(t => new Todo(t));
        store.commit("todos", todos)
      })
    //TODO Handle this response from the server
  }


  addTodoAsync(todo) {
    let list = [...store.State.todos, new Todo(todo)]
    store.commit("todos", list)
    todoApi.post("", todo)
    .then(res=>{
      this.getTodos();
    })
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    todo.completed = !todo.completed;
    store.commit("todos", store.State.todos)
    console.log(todo.completed)
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo)
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    // @ts-ignore
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this list item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        // @ts-ignore
        swal("Poof! Your list item has been deleted!", {
          icon: "success",
        });
        todoApi.delete(todoId)
    .then(res=>{
      this.getTodos();
    })
    .catch(error =>{
      console.error(error)
    })
      } else {
        // @ts-ignore
        swal("Your list item is safe!");
      }
    });
  }
}

const todoService = new TodoService();
export default todoService;
