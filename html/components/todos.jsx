function Todos({logChange}) {
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    getButton()
  }, [])

  const getButton = () => {
    getTodos().then((todos) => {
      setTodos(todos)
    })
  }

  const addButton = (todo) => {
    addTodos(todo).then(getButton)
  }

  const deleteButton = (id) => {
    deleteTodos(id).then(getButton)
  }

  const editbutton = (id, text) => {
    const newTodo = {
      text: text,
      date: "2022-10-18",
      user_id: 1
  }
    editTodos(newTodo, id).then(getButton)
  }

  return (
    <div className="main">
      <TodoInput onAdd={addButton} onEdit={editbutton}/>
      <TodoTable todos={todos} onDelete={deleteButton} onEdit={editbutton}/>
      {/* <button onClick={logChange}>Log out</button> */}
    </div>
  )
}