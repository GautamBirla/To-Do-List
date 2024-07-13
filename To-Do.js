document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("timeInput");
    const dateInput = document.getElementById("dateInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const completedTasksTable = document.getElementById("completedTasksTable");
    const completedTasksContainer = document.getElementById("completedTasksContainer");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        const taskTime = timeInput.value;
        const taskDate = dateInput.value;
        if (taskText !== "") {
            addTask(taskText, taskTime, taskDate);
            taskInput.value = "";
            timeInput.value = "";
            dateInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    });

    function addTask(taskText, taskTime, taskDate) {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-time">${taskTime}</span>
            <span class="task-date">${taskDate}</span>
            <button class="edit-btn">Edit</button>
            <button class="done-btn">Done</button>
        `;
        taskList.appendChild(li);
        addDoneListener(li);
        addEditListener(li);
    }

    function addDoneListener(li) {
        const doneBtn = li.querySelector(".done-btn");
        doneBtn.addEventListener("click", function() {
            const taskText = li.querySelector(".task-text").innerText;
            const taskTime = li.querySelector(".task-time").innerText;
            const taskDate = li.querySelector(".task-date").innerText;
            addCompletedTaskToTable(taskText, taskTime, taskDate);
            addCompletedTaskToBox(taskText, taskTime, taskDate);
            li.remove();
            sortCompletedTasks();
        });
    }

    function addEditListener(li) {
        const editBtn = li.querySelector(".edit-btn");
        const taskTextSpan = li.querySelector(".task-text");
        const taskTimeSpan = li.querySelector(".task-time");
        const taskDateSpan = li.querySelector(".task-date");
        const taskText = taskTextSpan.innerText;
        const taskTime = taskTimeSpan.innerText;
        const taskDate = taskDateSpan.innerText;
        editBtn.addEventListener("click", function() {
            const newTaskText = prompt("Edit task:", taskText);
            const newTaskTime = prompt("Edit time:", taskTime);
            const newTaskDate = prompt("Edit date:", taskDate);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskTextSpan.innerText = newTaskText;
                taskTimeSpan.innerText = newTaskTime;
                taskDateSpan.innerText = newTaskDate;
            }
        });
    }

    function addCompletedTaskToTable(taskText, taskTime, taskDate) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${taskText}</td>
            <td>${taskDate}</td>
            <td>${taskTime}</td>
        `;
        completedTasksTable.querySelector("tbody").appendChild(tr);
    }

    function addCompletedTaskToBox(taskText, taskTime, taskDate) {
        const taskBox = document.createElement("div");
        taskBox.classList.add("completed-task-box");
        taskBox.innerHTML = `
            <p><strong>Task:</strong> ${taskText}</p>
            <p><strong>Date:</strong> ${taskDate}</p>
            <p><strong>Time:</strong> ${taskTime}</p>
        `;
        completedTasksContainer.appendChild(taskBox);
    }

    function sortCompletedTasks() {
        const taskItems = Array.from(completedTasksTable.querySelectorAll("tbody tr"));
        taskItems.sort((a, b) => {
            const dateA = new Date(a.cells[1].innerText);
            const dateB = new Date(b.cells[1].innerText);
            return dateA - dateB;
        });
        const tbody = completedTasksTable.querySelector("tbody");
        tbody.innerHTML = "";
        taskItems.forEach(item => tbody.appendChild(item));
    }
});
