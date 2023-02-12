const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("Obrigado, seu formulário foi enviado!");
});

alert("Compre uma guitarra!");

var lastName = prompt("Digite seu sobrenome:");
var firstName = prompt("Digite seu nome:");
alert("Seu nome é: " + firstName + " " + lastName);

document.getElementById("sair").addEventListener("click", function (event) {
  var sairPagina = confirm("Você tem certeza que deseja sair da página?");
  if (!sairPagina) {
    event.preventDefault();
  }
});
