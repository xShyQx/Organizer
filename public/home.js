const title = document.getElementById("title");
const todolist = document.getElementById("todolist-list");
const calendar = document.getElementById("calendar-list");
const habits = document.getElementById("habits-list");

async function getData() {
    try {
        const response = await fetch("/home/tasks");
        const data = await response.json();
        title.innerHTML = `<h1>Witaj [nazwa_uzytkownika], dziś jest ${data.currentDate}</h1>`;
        if(data.tasks.length === 0) {
            todolist.innerHTML = "<p>Brak zadań</p>";
        } else {
            let list = "";
            data.tasks.forEach(task => {
                list += `<div class="task">
                <input type="radio">
                <label>${task.content}</label>
                </div>`;
            });
            todolist.innerHTML = list;
        }
    } catch(error) {
        console.log(error);
    }
}

getData();