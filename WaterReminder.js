var user = 9;
const litters = [2, 3, 4, 5, 6, 7, user];

function openPopUp() {
    document.querySelector("#message2").innerHTML = `Hello! You Set ${user} Litter Water! Don't forget to do it today`;
    document.querySelector('.value8').addEventListener("click", () => {
        const message = document.querySelector("#sent");
        message.id = "sent2";
        const close = document.querySelector("#exit");
        close.addEventListener("click", () => {
            message.id = "sent";
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    function updateclock() {
        const now = new Date();
        const hours = now.getHours();
        const currenttime = now.toLocaleString();
        if (hours >= 5 && hours < 12) {
            document.querySelector("#datetime").textContent = "Good Morning";
        } else if (hours >= 12 && hours < 18) {
            document.querySelector("#datetime").textContent = "Good Afternoon";
        } else {
            document.querySelector("#datetime").textContent = "Good Evening";
        }
    }
    setInterval(updateclock, 1000);
    updateclock();

    const taskContainer = document.querySelector("#task");
    const taskAdderButton = document.querySelector("#taskadder");

    // Show the task container when the "Add Task" button is clicked
    taskAdderButton.addEventListener("click", () => {
        taskContainer.style.display = "block";
    });

    // Hide the task container when clicking outside it
    document.addEventListener("click", function(event) {
        if (!taskContainer.contains(event.target) && event.target !== taskAdderButton) {
            taskContainer.style.display = "none";
        }
    });

    const addTaskButton = document.querySelector("#textsbutton");
    addTaskButton.addEventListener("click", () => {
        const taskText = document.querySelector("#texts").value.trim();
        const taskList = document.querySelector("#task ul");

        if (taskText) {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-task");
            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);
            document.querySelector("#texts").value = "";

            removeButton.addEventListener("click", (e) => {
                const taskItem = e.target.closest("li");
                taskItem.remove();
            });

            taskContainer.style.display = "none";  // Close task box after adding task
        } else {
            alert("Please enter a task!");
        }
    });

    const closeButton = document.querySelector("#exit2");
    closeButton.addEventListener("click", () => {
        taskContainer.style.display = "none";  // Hide task container when close button is clicked
    });

    const setMyLiterButton = document.querySelector(".value1");
    setMyLiterButton.addEventListener("click", () => {
        user = 2;
        openPopUp();
    });
    const setMyLiterButton2 = document.querySelector(".value2");
    setMyLiterButton2.addEventListener("click", () => {
        user = 3;
        openPopUp();
    });
    const setMyLiterButton3 = document.querySelector(".value3");
    setMyLiterButton3.addEventListener("click", () => {
        user = 4;
        openPopUp();
    });
    const setMyLiterButton4 = document.querySelector(".value4");
    setMyLiterButton4.addEventListener("click", () => {
        user = 5;
        openPopUp();
    });
    const setMyLiterButton5 = document.querySelector(".value5");
    setMyLiterButton5.addEventListener("click", () => {
        user = 6;
        openPopUp();
    });
    const setMyLiterButton6 = document.querySelector(".value6");
    setMyLiterButton6.addEventListener("click", () => {
        user = 7;
        openPopUp();
    });
    const setMyLiterButton7 = document.querySelector(".value7");
    setMyLiterButton7.addEventListener("click", () => {
        let response = prompt("How Much Litters Do you want to set?");
        user = response;
        openPopUp();
    });
});
