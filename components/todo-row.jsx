function TodoRow ({todo, onDelete, onEdit}) {
  return (
    <div className="todo-row">
      <button onClick={() => onDelete(todo.id)}>Done</button>
      {todo.text}
      <button onClick={() => onEdit(todo.id)}>Edit</button>
    </div>
  )
}