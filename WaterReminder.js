let user = 9;
const liters = [2, 3, 4, 5, 6, 7, user];

function openPopUp() {
    document.querySelector("#message2").innerHTML = `Hello! You Set ${user} Liters of Water! Don't forget to do it today`;
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
    function updateClock() {
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
    setInterval(updateClock, 1000);
    updateClock();

    const taskContainer = document.querySelector("#task");
    const taskAdderButton = document.querySelector("#taskadder");

    document.addEventListener("click", function(event) {
        if (!taskContainer.contains(event.target) && event.target !== taskAdderButton) {
            taskContainer.style.display = "none";
        }
    });

    taskAdderButton.addEventListener("click", () => {
        taskContainer.style.display = "block";
    });

    document.querySelector("#textsbutton").addEventListener("click", () => {
        const taskText = document.querySelector("#texts").value.trim();
        if (taskText) {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-task");
            newTask.appendChild(removeButton);
            document.querySelector("#task ul").appendChild(newTask);
            document.querySelector("#texts").value = "";

            removeButton.addEventListener("click", () => {
                newTask.remove();
            });

            taskContainer.style.display = "none";
        } else {
            alert("Please enter a task!");
        }
    });

    document.querySelector("#exit2").addEventListener("click", () => {
        taskContainer.style.display = "none";
    });

    document.querySelectorAll('.set-liter').forEach(button => {
        button.addEventListener("click", () => {
            user = button.dataset.liter || prompt("How Many Liters Do you want to set?");
            openPopUp();
        });
    });
});
