function TodoRow ({todo, onDelete, onEdit}) {
  const [edit, setEdit] = React.useState(false)

  const editing = () => {
    setEdit(!edit)
  } 

  function changeFlag (){
    if(!edit){
      editing()
      return 
    }
    let inputValue = document.getElementById(`input${todo.id}`).value
    onEdit(todo.id, inputValue)
    editing()
  }

  return (
    <div className="TodoRow">
      <button className="TodoRow__delete" onClick={() => onDelete(todo.id)}>Done</button>
      {!edit ? 
        <div className="TodoRow__text">{todo.text}</div> 
      :
      <input type="text" className="input" id={`input${todo.id}`} placeholder="New todo name"/>
      }
      <button className="TodoRow__edit" onClick={changeFlag}>{!edit?"Edit":"Save"}</button>
      
    </div>
  )
}