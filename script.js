
// VARIAVEIS

const textArea = document.querySelector(".container-texto-input");
const mensagem = document.querySelector(".container-descriptografia-output");



function btnCript() {
    document.getElementById("boneco").style.display = "none";
    const textoEncriptado = criptografia(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

//CRIPTOGRAFIA

function criptografia(codigoCripto) {
    let chaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    codigoCripto = codigoCripto.toLowerCase();

    for(let i = 0; i < chaves.length; i++) {
        if(codigoCripto.includes(chaves[i][0])) {
            codigoCripto = codigoCripto.replace(chaves[i][0], chaves[i][1]);
        }
    }

    return codigoCripto;
}

//DESCRIPTOGRAFAR

function btnDescript() {
    document.getElementById("boneco").style.display = "none";
    const textoEncriptado = descriptografia(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function descriptografia(codigoDescript) {
    let chaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    codigoDescript = codigoDescript.toLowerCase();

    for(let i = 0; i < chaves.length; i++) {
        if(codigoDescript.includes(chaves[i][0])) {
            codigoDescript = codigoDescript.replace(chaves[i][1], chaves[i][0]);
        }
    }

    return codigoDescript;
}


//BOTÃO COPIAR

function copy() {
    let copyText = document.querySelector(".container-descriptografia-output");
    copyText.select();
    document.execCommand("cut");
    textArea.value = "";
  }
  
  document.querySelector(".container-descriptografia-botao-copiar").addEventListener("click", cut);
