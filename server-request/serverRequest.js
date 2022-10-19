/* this programm has a bag which is that: when in 'todo.date' i wright post like this -> date: 18-10-2022, ->
i have an output in table which always equals = 1977 */

const todo = {
    text: "Buy food",
    date: "18-10-2022",
    user_id: 0,
}

//Display elements from object to table
document.getElementById("textFirst").innerHTML = todo.text;

document.getElementById("dateFirst").innerHTML = todo.date;

document.getElementById("idFirst").innerHTML = todo.user_id;
