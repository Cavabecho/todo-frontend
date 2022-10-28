function TodoTable({ todos, onDelete, onEdit }) {
  return (
   <div className="TodoTable">
      {todos.length !== 0 ? (todos.map(todo => (
         <TodoRow
         todo={todo}
         onDelete={onDelete}
         onEdit={onEdit}
         />
      ))): <div className="TodoTable__empty">No todos yet!</div>}
   </div>
  );
}