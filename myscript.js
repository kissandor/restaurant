let alertButton = document.querySelector("button.btn");
alertButton.addEventListener("click", function (ev) {
  ev.preventDefault();
  this.innerHTML = "Clicked";
  let myInputs = document.querySelectorAll("form input");

  for (let myInput of myInputs) {
    if (myInput.value == "") {
      myInput.style.border = "2px solid red";
    }
  }
});

//select the dismiss button
/*
let dismissButton = document.querySelector("button.close");
dismissButton.addEventListener("click", function (ev) {
  let dismissButtonParrent = dismissButton.parentElement;
  dismissButtonParrent.remove();
});
*/
