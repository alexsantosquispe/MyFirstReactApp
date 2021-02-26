import React from "react"

const itemContainer = {
  backgroundColor: "#edf0f5",
  padding: 8,
  marginBottom: 6,
  borderRadius: 4,
}

const ItemList = ({ id, data, onRemoveHandler, onEditHandler }) => {
  return (
    <div className="row" style={itemContainer}>
      <div className="col" style={{ alignSelf: "center" }}>
        <p className="h6">{data}</p>
      </div>
      <div className="col-2 d-flex justify-content-end">
        <div className="col">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              onEditHandler({ id, data })
            }}
          >
            Edit
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              onRemoveHandler(id)
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemList
