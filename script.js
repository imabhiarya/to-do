const inputbox = document.getElementById('input-box');
const listConatiner = document.getElementById('list-box');
// const outputField = document.getElementById('output-field');

function addTask() {

    if (inputbox.value === '') {
        alert('You must write something')
    } 
    else {
        let li = document.createElement('li')
        li.innerHTML = inputbox.value;
        listConatiner.appendChild(li);
        let span =  document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }
    inputbox.value= "";
    saveData();

}

listConatiner.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listConatiner.innerHTML);
}
function showTask(){
    listConatiner.innerHTML = localStorage.getItem("data");
}
showTask();

// localStorage.clear();