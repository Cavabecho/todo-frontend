function TodoTable({ todos, onDelete, onEdit }) {
  return (
   <div className="TodoTable">
      {todos.map(todo => (
         <TodoRow
         todo={todo}
         onDelete={onDelete}
         onEdit={onEdit}
         />
      ))}
   </div>
  );
}