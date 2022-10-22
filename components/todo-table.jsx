function TodoTable({ todos, onDelete, onEdit }) {
  return (
   <div>
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