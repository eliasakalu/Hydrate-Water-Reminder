var user=9;
const litters=[2,3,4,5,6,7,user];
function openPopUp() {
    // window.alert(`Hello! You Set ${user} Litter Water!`); // You can customize this to show a modal or perform another action
    document.querySelector("#message2").innerHTML=`Hello! You Set ${user} Litter Water! Don't forget to do it today`;
    document.querySelector('.value8').addEventListener("click",()=>{
        const message=document.querySelector("#sent");
        message.id="sent2";
        const close=document.querySelector("#exit");
        close.addEventListener("click",()=>{
            message.id="sent";
        });
    });
}
function todolist()
{
    //ss
  
}
// Close the pop-up (this function can be expanded if needed)
function closePopUp() {
    // Add functionality to close the pop-up
    // For example, hiding a modal or alert
}

document.addEventListener("DOMContentLoaded", function() {
    function updateclock(){
        const now=new Date();
        const hours=now.getHours()
        
        const currenttime=now.toLocaleString();
        if (hours >= 5 && hours < 12) {
            document.querySelector("#datetime").textContent="Good Morning";
        } else if (hours >= 12 && hours < 18) {
            document.querySelector("#datetime").textContent="Good Afternoon";
        } else {
            document.querySelector("#datetime").textContent="Good Evening";
        }
        
        
       
    }
    setInterval(updateclock, 1000);
    updateclock();
    document.querySelector(".greeter").display
    // Show the task adder section
const taskAdderButton = document.querySelector("#taskadder");
const taskContainer = document.querySelector("#task");

// Event listener to show the task input form
taskAdderButton.addEventListener("click", () => {
    taskContainer.style.display = "block"; // Make the task input visible
});

// Add task to the list when the "Add" button is clicked
const addTaskButton = document.querySelector("#textsbutton");
addTaskButton.addEventListener("click", () => {
    const taskText = document.querySelector("#texts").value.trim(); // Get the task text
    const taskList = document.querySelector("#task ul"); // The <ul> for the tasks
    
    if (taskText) {
        const newTask = document.createElement("li"); // Create a new <li>
        newTask.textContent = taskText; // Set its text to the input value

        // Create the remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-task");
        newTask.appendChild(removeButton); // Add the button to the <li>

        taskList.appendChild(newTask); // Add the <li> to the <ul>
        document.querySelector("#texts").value = ""; // Clear the input box

        // Add event listener to the remove button
        removeButton.addEventListener("click", (e) => {
            const taskItem = e.target.closest("li");
            taskItem.remove();
        });
    } else {
        alert("Please enter a task!"); // Show an alert if the input is empty
    }

    const taskpopcloser = document.querySelector("#exit2");
    taskpopcloser.addEventListener("click", () => {
        taskContainer.style.display = "none";
        return false;
    });
});

    const setMyLiterButton = document.querySelector(".value1");
    setMyLiterButton.addEventListener("click", ()=>{
        user=2;
        openPopUp();
    });
    const setMyLiterButton2 = document.querySelector(".value2");
    setMyLiterButton2.addEventListener("click", ()=>{
        user=3;
        openPopUp();
    });
    const setMyLiterButton3 = document.querySelector(".value3");
    setMyLiterButton3.addEventListener("click", ()=>{
        user=4;
        openPopUp();
    });
    const setMyLiterButton4 = document.querySelector(".value4");
    setMyLiterButton4.addEventListener("click", ()=>{
        user=5;
        openPopUp();
    });
    const setMyLiterButton5 = document.querySelector(".value5");
    setMyLiterButton5.addEventListener("click", ()=>{
        user=6;
        openPopUp();
    });
    const setMyLiterButton6 = document.querySelector(".value6");
    setMyLiterButton6.addEventListener("click", ()=>{
        user=7;
        openPopUp();
    });
    const setMyLiterButton7 = document.querySelector(".value7");
    setMyLiterButton7.addEventListener("click", ()=>{
        let response=prompt("How Much Litters Do you want to set?");
        user=response;
        openPopUp();
    });
});
