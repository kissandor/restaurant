let alertButton = document.querySelector("button.btn");
alertButton.addEventListener("click", function (ev) {
  ev.preventDefault();
  this.innerHTML = "Submitted";
});
