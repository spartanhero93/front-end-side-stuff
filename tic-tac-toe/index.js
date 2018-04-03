let squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i += 1) {
  squares[i].addEventListener("click", function(){
    this.innerHTML = "X"
  });
}