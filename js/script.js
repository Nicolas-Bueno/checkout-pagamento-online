//verificando campo valor
const valor = document.getElementById("valor");
const informarDados = document.getElementById("informar-dados");
const pix = document.getElementById("pix");
const credito = document.getElementById("credito");
const divPix = document.getElementsByClassName("container-pix")[0];
const divCredito = document.getElementsByClassName("container-credito")[0];
const valorPix = document.getElementById("valor-pix");

informarDados.addEventListener("click", function() {
    if (valor.value == "") {
        alert("Campo deve ser preenchido!");
        return;
    }

    // Calcula o valor com desconto
    let desconto = 10 / 100;
    let valorNumerico = parseFloat(valor.value);
    let valorComDesconto = valorNumerico - (valorNumerico * desconto);

    if (pix.checked) {
        divPix.style.display = "block";
        divPix.style.marginTop = "10px";
        valorPix.textContent = "Total: " + valorComDesconto.toFixed(2); // Limita o número de casas decimais
    } else if (credito.checked) {
        divCredito.style.display = "block";
        divCredito.style.marginTop = "10px";
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
