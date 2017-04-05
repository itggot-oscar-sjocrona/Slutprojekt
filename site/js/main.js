function display_message(element) {
  var temp = document.querySelector(element);
  temp.classList.add("hidden");
  var temp2 = document.querySelector('#message')
  temp2.classList.remove("hidden")
}
