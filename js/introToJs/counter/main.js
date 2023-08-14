
let decrease_button = document.getElementById("decrease"), increase_button = document.getElementById("increase") ,reset_button = document.getElementById("reset"), counter_dom = document.querySelector(".counter"), popup = document.querySelector(".popup");
let counter = 0;
const increase = () =>{
  counter++;
  counter_dom.innerText = counter;
}
const decrease = () =>{
  if(counter === 0){ 
    popupFn()
  }
  else{
    counter--;
    counter_dom.innerText = counter;
  }
}
function reset() {
  counter = 0;
  counter_dom.innerText = counter;
}
function popupFn() {
 popup.style.visibility = "visible"
 setTimeout(() => {
    popup.style.visibility = "hidden"
 }, 5000);

}
increase_button.addEventListener("click", increase);
decrease_button.addEventListener("click", decrease);
reset_button.addEventListener("click", reset)

