// Adding the date to the script
const currently =document.getElementById('date');

function formatDate(date){
    const options = {day:'numeric',month:'numeric',year:'numeric'};
    return date.toLocaleDateString(undefined, options);
}

const today = new Date();
currently.textContent = formatDate(today);

//function that will make the list
function generatelist(tasks){
const taskInput = document.getElementById(tasks)

//The next part ensures that no empty things are added to the list
const taskTest = taskInput.value.trim()

if (taskText === '') {
    alert('Please enter a task.');
    return;
}
}

// Displaying the tasks on to the empty div:
document.getElementById('to-do').addEventListener('submit',function(event){
    event.preventDefault();
    const tasks = (document.getElementById('tasks').value);
    const lists = document.getElementById('List');
    lists.innerHTML = ''
    const ul = generatelist(tasks)

})
