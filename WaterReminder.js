document.addEventListener("DOMContentLoaded", function () {
    // Time Display (Greeting Based on Time of Day)
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const currentTime = now.toLocaleString();
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

    // Task Popup Functionality
    const taskContainer = document.querySelector("#task");
    const taskAdderButton = document.querySelector("#taskadder");

    // Show the task container when the "Add Task" button is clicked
    taskAdderButton.addEventListener("click", () => {
        taskContainer.style.display = "block";  // Ensures the task container becomes visible
    });

    // Hide the task container when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!taskContainer.contains(event.target) && event.target !== taskAdderButton) {
            taskContainer.style.display = "none";  // Hide the task container if clicked outside
        }
    });

    // Add Task Button
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

            // Append the remove button to the task item
            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);

            // Clear the input field
            document.querySelector("#texts").value = "";

            // Add event listener to remove task
            removeButton.addEventListener("click", (e) => {
                const taskItem = e.target.closest("li");
                taskItem.remove();
            });

            // Hide the task container after adding task
            taskContainer.style.display = "none";
        } else {
            alert("Please enter a task!");
        }
    });

    // Close button functionality
    const closeButton = document.querySelector("#exit2");
    closeButton.addEventListener("click", () => {
        taskContainer.style.display = "none"; // Hide task container when close button is clicked
    });

    // Water Liters Settings (Buttons)
    const setMyLiterButton1 = document.querySelector(".value1");
    setMyLiterButton1.addEventListener("click", () => {
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
        let response = prompt("How much liters do you want to set?");
        user = response;
        openPopUp();
    });
});
