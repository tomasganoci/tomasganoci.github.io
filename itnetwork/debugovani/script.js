function add() {
  let number1 = document.getElementById("a").value;
  let number2 = document.getElementById("b").value;

  document.getElementById("result").innerHTML =
    parseInt(number1) + parseInt(number2);
}
