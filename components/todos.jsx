
function Todos() {
  const [flag, setFlag] = React.useState(false)
  const [todos, setTodos] = React.useState([])
  const showTitle = () => {
    setFlag(!flag)
  }

  const getButton = () => {
    getTodos().then((todos) => {
      setTodos(todos)
    })
  }

  const addButton = () => {
    const todo = {
      text: "Buy food",
      date: "2022-10-18",
      user_id: 0
  }
    addTodos(todo).then(getButton)
  }

  const deleteButton = (id) => {
    deleteTodos(id).then(getButton)
  }

  const editbutton = () => {
    const newTodo = {
      text: "Do homework",
      date: "2022-10-18",
      user_id: 1
  }
    editTodos(newTodo, 26)
  }

  return (
    <div>
      {flag ? <h1>hello</h1> : null}
      <button onClick={getButton}>get buttoon</button>
      <button onClick={addButton}>add buttoon</button>
      <button onClick={deleteButton}>delete buttoon</button>
      <button onClick={editbutton}>edit buttoon</button>
      {todos.map((todo) => (
        // <div> {todo.text} </div>
        <TodoRow 
          todo={todo}
          onDelete={deleteButton}
        />
      ))}
    </div>
  )
}