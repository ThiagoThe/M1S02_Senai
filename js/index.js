const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("Obrigado, seu formulário foi enviado!");
});

alert("Compre uma guitarra!");

var userName = prompt("Digite seu nome:");
var idade = parseInt(prompt("Digite sua idade:"));
var cidade = prompt("Digite a sua cidade:");
console.log(userName + " com " + idade + " anos e da cidade de: " + cidade);

document.getElementById("sair").addEventListener("click", function (event) {
  var sairPagina = confirm("Você tem certeza que deseja sair da página?");
  if (!sairPagina) {
    event.preventDefault();
  }
});
