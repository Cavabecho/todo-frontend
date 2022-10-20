
async function deleteTodos(id){
    const response = fetch(`http://104.248.166.249:3000/todo/${id}`, {
        method: 'DELETE',
    })
    .then((result) => result.json())
    .then((result) => console.log(result))
}