
async function addTodos(){
    const response = fetch('http://104.248.166.249:3000/todo',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: "Eate food",
            date: "2022-10-18",
            user_id: 0
        })
    })
    .then((result) => result.json())
    .then((result) => console.log(result))
}