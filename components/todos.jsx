function Todos() {
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    getButton()
  }, [])

  const getButton = () => {
    getTodos().then((todos) => {
      setTodos(todos)
    })
  }
  
  const addButton = () => {
    const todo = {
      text: "Buy food",
      date: "2022-10-18",
      user_id: 1
  }
    addTodos(todo).then(getButton)
  }

  const deleteButton = (id) => {
    deleteTodos(id).then(getButton)
  }

  const editbutton = (id) => {
    const newTodo = {
      text: "Do homework",
      date: "2022-10-18",
      user_id: 1
  }
    editTodos(newTodo, id).then(getButton)
  }

  return (
    <div>
      <button onClick={getButton}>Update todos</button>
      <button onClick={addButton}>Add todo</button>
      <TodoTable todos={todos} onDelete={deleteButton} onEdit={editbutton}/>
    </div>
  )
}