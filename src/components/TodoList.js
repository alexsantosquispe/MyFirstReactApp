import React from "react"
import ItemList from "./ItemList"

const TodoList = ({ data, onRemove, onEdit }) => {
  return (
    <div className="container">
      <h5>Todo List</h5>
      {data &&
        data.map((item) => {
          return (
            <ItemList
              key={item.id}
              id={item.id}
              data={item.data}
              onRemoveHandler={onRemove}
              onEditHandler={onEdit}
            />
          )
        })}
    </div>
  )
}

export default TodoList
