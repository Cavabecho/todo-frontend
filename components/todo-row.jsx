function TodoRow ({todo, onDelete, onEdit}) {
   console.log(todo)
  return (
    <div className="todo-row">
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}