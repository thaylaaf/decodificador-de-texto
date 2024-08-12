function criptografar() {
    let inputText = document.getElementById("inputText").value.trim();

    if (!inputText) {
        alert("Por favor, insira um texto para criptografar.");
        return;
    }

    if (/[^a-z\s]/.test(inputText)) {
        alert("O texto deve conter apenas letras minúsculas e sem caracteres especiais.");
        return;
    }

    let outputText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").value = outputText;
    document.getElementById("inputText").value = "";
    document.getElementById("imagemIcone").style.display = "none";
    mostrarBotaoCopiar();
}

function descriptografar() {
    let inputText = document.getElementById("inputText").value.trim();

    if (!inputText) {
        alert("Por favor, insira um texto para descriptografar.");
        return;
    }

    if (/[^a-z\s]/.test(inputText)) {
        alert("O texto deve conter apenas letras minúsculas e sem caracteres especiais.");
        return;
    }

    let outputText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").value = outputText;
    document.getElementById("inputText").value = "";
    document.getElementById("imagemIcone").style.display = "none";
    mostrarBotaoCopiar();
}

function copiarTexto() {
    let outputTextElement = document.getElementById("outputText");
    let outputText = outputTextElement.value.trim();

    if (!outputText) {
        alert("Nada para copiar.");
        return;
    }

    outputTextElement.select();
    document.execCommand("copy");
    outputTextElement.value = "Texto copiado para a área de transferência.";

    setTimeout(() => {
        outputTextElement.value = "";
        mostrarBotaoCopiar();
        document.getElementById("imagemIcone").style.display = "block";
    }, 2000);
}

function mostrarBotaoCopiar() {
    let outputText = document.getElementById("outputText").value.trim();
    document.getElementById("copyButton").style.display = outputText ? "block" : "none";
}
