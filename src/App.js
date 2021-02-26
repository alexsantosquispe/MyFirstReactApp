import React, { useState } from "react"
import uniqid from "uniqid"
import "./App.css"
import TodoList from "./components/TodoList"

function App() {
  const [task, setTask] = useState({ id: null, data: "" })
  const [todo, setTodo] = useState([])
  const [editable, setEditable] = useState(false)

  const onChangeTask = (event) => {
    setTask({
      ...task,
      data: event.target.value,
    })
  }

  const addTask = (event) => {
    event.preventDefault()
    setTodo([
      ...todo,
      {
        id: uniqid(),
        data: task.data,
      },
    ])
    setTask({ id: null, data: "" })
  }

  const editTask = (event) => {
    event.preventDefault()
    const newTodoList = todo.map((item) => (item.id === task.id ? task : item))
    setTodo(newTodoList)
    setEditable(false)
    setTask({ id: null, data: "" })
  }

  const removeTask = (id) => {
    const newTodoList = todo.filter((item) => item.id !== id)
    setTodo(newTodoList)
  }

  const selectTask = (item) => {
    setTask(item)

    setEditable(true)
  }

  return (
    <div className="container">
      <div className="row">
        <h3>CRUD</h3>
        <br />
      </div>
      <div className="row">
        <form className="form-inline">
          <span className="mb-2" style={{ marginRight: 8 }}>
            New Task
          </span>
          <div className="form-group mb-2">
            <input
              type="text"
              value={task.data}
              className="form-control"
              id="taskInput"
              placeholder="Introduce a task"
              onChange={onChangeTask}
            />
          </div>
          <button
            className="btn btn-primary mb-2"
            style={{ marginLeft: 8 }}
            type="submit"
            onClick={editable ? editTask : addTask}
            disabled={task.data.length === 0}
          >
            {editable ? "Edit" : "Add"}
          </button>
        </form>
      </div>
      <div className="row" style={{ paddingTop: 24 }}>
        <TodoList data={todo} onRemove={removeTask} onEdit={selectTask} />
      </div>
    </div>
  )
}

export default App
