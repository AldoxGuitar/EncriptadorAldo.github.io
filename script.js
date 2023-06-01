const textarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".textarea").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnencript(){
    if(!validarTexto()) {
        const textoencriptado = encriptar(textarea.value)
        mensaje.value = textoencriptado
        textarea.value = "";
        mensaje.style.backgroundImage = "none";
        copia.style.display = "block"
    }
}

function btndesencript(){
    const textoencriptado = desencriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";
}


function encriptar(stringencript){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    stringencript = stringencript.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(stringencript.includes(matriz[i][0])){
            stringencript = stringencript.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringencript
}

function desencriptar(stringdesencript){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    stringdesencript = stringdesencript.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(stringdesencript.includes(matriz[i][1])){
            stringdesencript = stringdesencript.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return stringdesencript
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
