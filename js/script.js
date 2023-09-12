//verificando campo valor
const valor = document.getElementById("valor");
const informarDados = document.getElementById("informar-dados");

informarDados.addEventListener("click", function(){
    if(valor.value == ""){
        alert("campo deve ser preenchido!");
    }
});

// validadando cartao de credito
const numeroCartaoInput = document.getElementById("numero-cartao");
const bandeiraImg = document.getElementById("bandeira");
const erroNumeroSpan = document.getElementById("erro-numero");

numeroCartaoInput.addEventListener("keyup", function () {
  const numeroCartao = this.value.trim();
  let bandeiraSrc = "";
  let bandeiraAlt = "";
  let erroCartao = "";

  if (numeroCartao.startsWith("1234")) {
    bandeiraSrc = "img/mastercard.png";
    bandeiraAlt = "Mastercard";
  } else if (numeroCartao.startsWith("4321")) {
    bandeiraSrc = "img/visa.png";
    bandeiraAlt = "Visa";
  } else {
    erroCartao = "Erro cartão inválido";
  }

  bandeiraImg.src = bandeiraSrc;
  bandeiraImg.alt = bandeiraAlt;
  erroNumeroSpan.textContent = erroCartao;

  if (erroCartao) {
    bandeiraImg.style.display = "none";
    erroNumeroSpan.style.display = "block";
  } else {
    bandeiraImg.style.display = "inline-block";
    erroNumeroSpan.style.display = "none";
  }
});
