// Adding the date to the script
const currently =document.getElementById('date');

function formatDate(date){
    const options = {day:'numeric',month:'numeric',year:'numeric'};
    return date.toLocaleDateString(undefined, options);
}

const today = new Date();
currently.textContent = formatDate(today);


const Tasks= document.getElementById("tasks");
const listContainer= document.getElementById("list-container");

function addTask(){
    // when nothing is entered in the input box
    if(Tasks.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = Tasks.value;
        event.preventDefault();
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    Tasks.value = "" ;
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask();