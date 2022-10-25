function TodoInput({onAdd, onEdit}){
    function readInput(){
        let inputValue = document.getElementById('searchTxt').value
        const todo = {
            text: inputValue,
            date: "2022-10-18",
            user_id: 1
        }
        if(inputValue == ''){
            console.log("Name todo")
        }else{
            onAdd(todo)
            document.getElementById('searchTxt').value = ""
        }
    }

    return(
        <div className="TodoInput">
           <input type="text" className="TodoInput__text" id="searchTxt" placeholder="Todo name"/>
           <button className="TodoInput__button" onClick={() => readInput()}>Add</button>
        </div>
    )
}