//

let cafe;
let acompanhamento;
let add;
let preco;

function getExpress() {
  document.getElementById("express").style.borderColor = "green";
  document.getElementById("capu").style.borderColor = "white";
  document.getElementById("ma").style.borderColor = "white";
  preco = 3,50;
  cafe = "Café Expresso";
}

function getCapu() {
  document.getElementById("capu").style.borderColor = "green";
  document.getElementById("express").style.borderColor = "white";
  document.getElementById("ma").style.borderColor = "white";
  preco = 7,50;
  cafe = "Cappuccino";
}

function getMa() {
  document.getElementById("ma").style.borderColor = "green";
  document.getElementById("express").style.borderColor = "white";
  document.getElementById("capu").style.borderColor = "white";
  preco = 10.00;
  cafe = "Macchiato";
}

function getLeite() {
  document.getElementById("Leite").style.borderColor = "green";
  document.getElementById("acucar").style.borderColor = "white";
  preco = 1.00;
  acompanhamento = "Leite";
}

function getAcucar() {
  document.getElementById("acucar").style.borderColor = "green";
  document.getElementById("leite").style.borderColor = "white";
  preco = 1.00;
  acompanhamento = "Cubo de açucar";
}

function getPaoqueijo() {
  document.getElementById("paoqueijo").style.borderColor = "green";
  document.getElementById("especial").style.borderColor = "white";
  preco = 2.00;
  add = "Pão de queijo";
}

function getEspecial() {
  document.getElementById("especial").style.borderColor = "green";
  document.getElementById("paoqueijo").style.borderColor = "white";
  preco = 5.99;
  add = "Especial da casa";
}

function finalizarPedido() {
  let mensagem;
  mensagem =
    "Olá, gostaria de pedir um : " +
    cafe +
    "com " +
    acompanhamento +
    " e " +
    add +".";

  window.open("https://wa.me/+5577999660068?text=" + mensagem);
}
