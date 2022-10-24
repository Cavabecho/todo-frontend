function TodoRow ({todo, onDelete, onEdit}) {
  return (
    <div className="TodoRow">
      <button className="TodoRow__delete" onClick={() => onDelete(todo.id)}>Done</button>
      <div className="TodoRow__text">{todo.text}</div>
      <button className="TodoRow__edit" onClick={() => onEdit(todo.id)}>Edit</button>
    </div>
  )
}