const timeelement = document.getElementById('time');
const dayelement = document.getElementById('day');
const taskinput = document.getElementById('task')

function addZero(number){
    return number < 10 ? `0${number}` : number;
}
function updateTime() {
    const now = new Date();
    
    const today = now.toDateString();
    // now.getFullYear();
    const hours = addZero(now.getHours());
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());

   const Time = `${hours}:${minutes}:${seconds}`;
    timeelement.textContent = Time;
    const day = `${today}`;
    dayelement.textContent = today;
}
setInterval(updateTime,1000);
updateTime(); 

let task =[]
let id=1
document.getElementById('add').addEventListener('click',() => {
    const taskhtml = taskinput.value;
    document.querySelector(".container").style.opacity = 1;
    if (taskhtml !== '') {
  const taskText = `<li id="t${id}">${taskhtml}<button onclick="borrar(${id})">X</button></li>`;
        task.push(taskText);
        console.log(taskText);
        tasklist.innerHTML = '';
        taskinput.value = '';
        id++
    }
    rendertask();
});

function borrar(id){
    document.getElementById(`t${id}`).remove()
   
  }

function rendertask(){
    for (let i = 0; i < task.length; i++){
        document.getElementById('tasklist').innerHTML += task[i];
        // tasklist.innerHTML += task[i];
    }
}

// const timeElement = document.getElementById('time');
// const taskInput = document.getElementById('task');

// function addZero(number) {
//   return number < 10 ? `0${number}` : number;
// }

// function uptadeTime() {
//   const now = new Date();

//   const hours = addZero(now.getHours());
//   const minutes = addZero(now.getMinutes());
//   const seconds = addZero(now.getSeconds());

//   const Time = `${hours}:${minutes}:${seconds}`;
//   timeElement.textContent = Time;
// }

// setInterval(uptadeTime, 1000);
// uptadeTime();

// let task = [];

// document.getElementById('add').addEventListener('click', () => {
//   const taskHTML = taskInput.value;
//   if (taskHTML !== '') {
//     const taskText = `<li>${taskHTML}</li>`;
//     task.push(taskText);
//     console.log(taskText);
//     taskList.innerHTML = '';
//     taskInput.value = '';
//   }
//   renderTask();
// });

// function renderTask() {
//   for (let i = 0; i < task.length; i++) {
//     document.getElementById('taskList').innerHTML += task[i];
//   }
// }