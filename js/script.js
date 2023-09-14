//verificando campo valor
const valor = document.getElementById("valor");
const informarDados = document.getElementById("informar-dados");
const pix = document.getElementById("pix");
const credito = document.getElementById("credito");
const divPix = document.getElementsByClassName("container-pix")[0];
const divCredito = document.getElementsByClassName("container-credito")[0];
const valorPix = document.getElementById("valor-pix");

const pagarCredito = document.getElementById("pagar-credito");
const pagarPix = document.getElementById("pagar-pix");

const container = document.getElementsByClassName("container")[0];
const successMessage = document.getElementsByClassName("success-message")[0];

informarDados.addEventListener("click", function() {
    if (valor.value == "") {
        alert("Campo deve ser preenchido!");
        return;
    }

    // Calcula o valor do pix com desconto
    let desconto = 10 / 100;
    let valorNumerico = parseFloat(valor.value);
    let valorComDesconto = valorNumerico - (valorNumerico * desconto);

    if (pix.checked) {
        divCredito.style.display = "none";
        divPix.style.display = "block";
        divPix.style.marginTop = "10px";
        valorPix.textContent = "Total: " + valorComDesconto.toFixed(2);
    } else if (credito.checked) {
        divPix.style.display = "none";
        divCredito.style.display = "block";
        divCredito.style.marginTop = "10px";
        calcularParcelamento();
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
    erroCartao = "Número de cartão inválido";
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

//Parcelamento do credito
function calcularParcelamento(){
    const parcela = 5;
    let valorElement = document.getElementById("valor");

    if (!valorElement) {
        console.error("Elemento 'valor' não encontrado.");
        return;
    }

    let valorNumerico = parseFloat(valorElement.value);

    if (isNaN(valorNumerico)) {
        console.error("O valor não é um número válido.");
        return;
    }
    
    for (let i = 1; i <= parcela; i++) {
        let valorParcela;
        
        if (i <= 3) {
            // Para 1 a 3 parcelas, sem juros
            valorParcela = valorNumerico / i;
        } else if(i == 4) {
            // Para 4 parcelas, 5% de juros sobre o valor inicial
            valorParcela = (valorNumerico * 1.05) / i;
        }else{
            valorParcela = (valorNumerico * 1.10) / i;
        }

        let spanId = "valorParcela" + i;
        let span = document.getElementById(spanId);

        if (span) {
            span.textContent = i + "X: R$" + valorParcela.toFixed(2);
        }
    }
}

// calculando total de parcelamento
function calculandoTotal(){
    const numeroParcelas = document.getElementById("parcelas").value;
    let valorElement = document.getElementById("valor");
    let valorNumerico = parseFloat(valorElement.value);

    if (numeroParcelas >= 1 && numeroParcelas <= 3) {
        valorParcela = valorNumerico / numeroParcelas;
    } else if (numeroParcelas == 4) {
        valorParcela = (valorNumerico * 1.05) / numeroParcelas; // 5% de juros
    } else if (numeroParcelas == 5) {
        valorParcela = (valorNumerico * 1.10) / numeroParcelas; // 10% de juros
    } else {
        console.error("Número de parcelas inválido.");
        return;
    }

    const spanTotalCredito = document.getElementById("total-credito");

    if (spanTotalCredito) {
        spanTotalCredito.textContent = "Total: " + valorParcela.toFixed(2);
    }
}

window.addEventListener("change", function () {
    calculandoTotal();
});

pagarCredito.addEventListener("click", function(){
    container.style.display = "none";
    successMessage.style.display = "block";

});

pagarPix.addEventListener("click", function(){
    container.style.display = "none";
    successMessage.style.display = "block";

});