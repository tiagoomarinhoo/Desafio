
function criptografarTexto(){
    let chave = document.querySelector('textarea').value;

    chave = chave.replace(/e/g,"enter");
    chave = chave.replace(/i/g,"imes");
    chave = chave.replace(/a/g,"ai");
    chave = chave.replace(/o/g,"ober");
    chave = chave.replace(/u/g,"ufat");
      
    document.getElementById("tx-resultado").innerHTML = chave;

    document.getElementById("img").style.display="none";
    document.getElementById("tx-paragrafo").style.display="none";
    document.getElementById("tx-none").style.display="none";

    document.getElementById("tx-resultado").style.display="flex";
    document.getElementById("ativarCopiar").style.display="flex";

    limparCampo();
}

function limparCampo(){
    chave = document.querySelector('textarea').value = '';
    
}


async function copiar(){

    let copiarTx = document.getElementById("tx-resultado").textContent; 
    await navigator.clipboard.writeText(copiarTx);

    document.getElementById("tx-resultado").innerHTML = 'Nenhuma mensagem';
    
}

function descriptografarTexto(){

    let chave = document.querySelector('textarea').value;
    chave = chave.replace(/enter/g,"e");
    chave = chave.replace(/imes/g,"i");
    chave = chave.replace(/ai/g,"a");
    chave = chave.replace(/ober/g,"o");
    chave = chave.replace(/ufat/g,"u");
      
    document.getElementById("tx-resultado").innerHTML = chave;

    limparCampo();
}