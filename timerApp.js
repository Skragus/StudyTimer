let startButton = document.getElementById("buttonId");
let inputMinDiv = document.getElementById("inputMin");
let inputMaxDiv = document.getElementById("inputMax");
let topTextDiv = document.getElementById("divTop");

let minutes;
let counter;

function getTime(min, max) {
  if(min == 0){min=30}
  if(max == 0){max=60}
  let temp = Number(max) - Number(min);
  let res = Math.ceil(Math.random() * temp);
  minutes = Number(min) + res
}

function reduceTime(){
  minutes--
}
 
function startTime (minutes){
  console.log(minutes)
  if (minutes > 0){
    reduceTime()
    }else{
      timerDone()
      document.getElementById("chime").play()
      startButton.style.backgroundColor='#FEC868'
      startButton.innerHTML = 'Start'
    };
}

function timerDone(){
  topTextDiv.innerText = 'take a break'
  clearInterval(counter)
}

startButton.onclick = () => runProgram ();

function runProgram () {
  if (startButton.innerHTML == 'Start') {
    startButton.style.backgroundColor='#FF6961'
    startButton.innerHTML = 'Stop'
    topTextDiv.innerText = 'study time'
    getTime(inputMinDiv.value, inputMaxDiv.value)
    counter = setInterval(() => {startTime(minutes)}, 60000);

  } else {
    startButton.style.backgroundColor='#FEC868'
    startButton.innerHTML = 'Start'
    topTextDiv.innerText = 'take a break'
    clearInterval(counter)
  }
}
