const textoArea = document.querySelector(".texto-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat

function btnEncriptar(){
    const textoEncriptado = encriptar(textoArea.value)
    mensaje.value = textoEncriptado
    textoArea.value = "";
    mensaje.style.background = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoArea.value)
    mensaje.value = textoEncriptado
    textoArea.value = "";
    
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function copy() {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector(".copiar").addEventListener("click", copy);
  

function changeTitleColor(buttonClass) {
    document.querySelector('.encabezado-titulo').style.color = '#E76F51'; // Cambia el color del título
}