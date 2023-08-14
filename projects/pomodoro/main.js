"use strict";
// Global variables
let domTimer = document.getElementById("timer"),domStart = document.getElementById("start"),domStop =  document.getElementById("stop"), domReset = document.getElementById("reset"), finished, click = 0, stop = false, breaks;
const config = {
  work: 1,
  break: 10,
  longBreak: 20,
  longBreakIntervals: 2
} 
//A general timer function, receive a time given in minutes

const timerFn = (time) =>{
  let i = time * 60, minutes, seconds;
  const myInterval = setInterval(() => {
    if(i > -1){
      minutes = Math.floor(i/60);
      seconds = i-minutes*60;
      i--;
      if(seconds < 10){
        domTimer.innerText = `${minutes}:0${seconds}`
      }else{
        domTimer.innerText = `${minutes}:${seconds}`
      }
    }else{
      clearInterval(myInterval);
    }
  }, 1000);
 }
cont pomodoro = (cfg) =>{
  timerFn(cfg.work);
  
}
domStart.addEventListener('click', () =>{
  if(click === 0){
    timerFn(config.work);

  }
  }
) 
