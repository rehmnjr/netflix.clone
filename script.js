
function setError(id, error){
 document.getElementById(id).innerText = error;
}
function removeError(id, error){
 document.getElementById(id).innerText = error;
}

function validationCheck(){
  event.preventDefault();
  let email = document.forms['myform']['femail'].value;
  if(email == ""){
    setError("setEmail", "*email is required")
    return false;
  }else if(email !== ""){
    removeError("setEmail", "")
  }
  return true;
}

let plusButtons = document.querySelectorAll(".plus");
let ansBoxes = document.querySelectorAll(".ans-Box");
let bit = 0;
plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("rotate-45deg");
    ansBoxes[index].classList.toggle("hide");
  });
});
