let user = 0; // Default value
const liters = [2, 3, 4, 5, 6, 7, user];

function openPopUp(liters) {
    document.querySelector("#message2").textContent = `Hello! You Set ${liters} Liters of Water! Don't forget to do it today`;
    const message = document.querySelector("#sent");
    message.showPopover(); // Show the popup

    // Close button functionality
    document.querySelector("#exit").addEventListener("click", () => {
        message.hidePopover(); // Hide the popup
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Time Display (Greeting Based on Time of Day)
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const greeting = hours >= 5 && hours < 12 ? "Good Morning" :
                         hours >= 12 && hours < 18 ? "Good Afternoon" : "Good Evening";
        document.querySelector("#datetime").textContent = greeting;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Task Popup Functionality
    const taskContainer = document.querySelector("#task");
    const taskAdderButton = document.querySelector("#taskadder");

    // Show the task container when the "Add Task" button is clicked
    taskAdderButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the document click event from closing the container
        taskContainer.style.display = "block";
    });

    // Hide the task container when clicking outside of it
    document.addEventListener("click", () => {
        taskContainer.style.display = "none";
    });

    // Prevent the task container from closing when clicking inside it
    taskContainer.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Add Task Button
    document.querySelector("#textsbutton").addEventListener("click", () => {
        const taskText = document.querySelector("#texts").value.trim();
        if (taskText) {
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-task");

            // Append the remove button to the task item
            newTask.appendChild(removeButton);
            document.querySelector("#task ul").appendChild(newTask);

            // Clear the input field
            document.querySelector("#texts").value = "";

            // Add event listener to remove task
            removeButton.addEventListener("click", () => {
                newTask.remove();
            });

            // Hide the task container after adding task
            taskContainer.style.display = "none";
        } else {
            alert("Please enter a task!");
        }
    });

    // Close button functionality
    document.querySelector("#exit2").addEventListener("click", () => {
        taskContainer.style.display = "none";
    });

    // Water Liters Settings (Buttons)
    document.querySelectorAll('.value').forEach((button, index) => {
        button.addEventListener("click", () => {
            if (index === 6) { // Custom Liters button
                user = parseInt(prompt("How many liters do you want to set?"), 10) || 0;
            } else {
                user = liters[index]; // Set liters based on the button index
            }
            openPopUp(user); // Open the popup with the selected liters
        });
    });
});
