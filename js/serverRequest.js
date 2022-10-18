/* this programm has a bag which is that: when in 'todo.date' i wright post like this -> date: 18-10-2022, ->
i have an output in table which always equals = 1977 */

const todo = {
    text: "Buy food",
    date: "18-10-2022",
    "user_id": 0,
}

//Display elements from object to table
let text = todo.text;
document.getElementById("textFirst").innerHTML = text;

let date = todo.date;
document.getElementById("dateFirst").innerHTML = date;

let user_id = todo.user_id;
document.getElementById("idFirst").innerHTML = user_id;