const myInput = document.getElementById("myinput");

const cost = document.getElementById("cost")

function stepper (btn){

  let id = btn.getAttribute("id")
  let min = myInput.getAttribute("min")
  let max = myInput.getAttribute("max")
  let step = myInput.getAttribute("step")
  let val = myInput.getAttribute("value")
  let cst = cost.getAttribute("value")
  let calcStep = (id == "increment") ? (step*1) : (step * -1) 
  
  let newValue = parseInt(val) + calcStep;
  if(newValue >= min && newValue<=max){
    myInput.setAttribute("value",newValue);
  }

  
  if (newValue>parseInt(val)){
    cost.setAttribute("value",parseInt(cst) *2 + '$')}
    else if ( newValue<parseInt(val) && newValue !=0 ) {
    cost.setAttribute("value",parseInt(cst)/2 + '$')
    } else {
      return cst + '$'
    }





}