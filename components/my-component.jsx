
function MyComponent() {
  const [flag, setFlag] = React.useState(false)
  const [todos, setTodos] = React.useState([])
  const showTitle = () => {
    setFlag(!flag)
  }

  const handleClick = () => {
    getTodos().then((todos) => {
      setTodos(todos)
    })
  }
  

  return (
    <div>
      {flag ? <h1>hello</h1> : null}
      <button onClick={handleClick}>get buttoon</button>
      {todos.map((todo) => (
        <h1>{todo.text}</h1>
      ))}
      {/* <button onClick={getData}>add buttoon</button>
      <button onClick={getData}>edit buttoon</button>
      <button onClick={getData}>delete buttoon</button> */}

    </div>
  )
}