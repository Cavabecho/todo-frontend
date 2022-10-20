
function MyComponent() {
  const [flag, setFlag] = React.useState(false)
  const [todos, setTodos] = React.useState([])
  const showTitle = () => {
    setFlag(!flag)
  }

  const handleGetButton = () => {
    getTodos().then((todos) => {
      setTodos(todos)
    })
  }

  const handleAddButton = () => {
    addTodos()
  }

  const handleDeletebutton = () => {
    deleteTodos(20)
  }

  const handleEditbutton = () => {
    editTodos(27)
  }

  return (
    <div>
      {flag ? <h1>hello</h1> : null}
      <button onClick={handleGetButton}>get buttoon</button>
      <button onClick={handleAddButton}>add buttoon</button>
      <button onClick={handleDeletebutton}>delete buttoon</button>
      {/*<button onClick={handleEditbutton}>edit buttoon</button>*/}
      {todos.map((todo) => (
        <h1>{todo.text}</h1>
      ))}
    </div>
  )
}