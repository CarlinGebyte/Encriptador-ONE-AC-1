$(document).ready(function () {
    $("#encrypt").click(function () {
        let message = $.trim($("#message").val());
        if (message != "") {
            if (verifyMessage(message)) {
                encrypted = encryptMessage(message);
                result(encrypted);
                $("#message").val("");
            } else {
                defaultResult();
                $("#message").val("");
            }
        } else {
            defaultResult();
            alert("Por favor ingresar un mensaje a encriptar");
        }

    })
})

function encryptMessage(message) {
    let process = Array.from(message);
    let result = "";
    for (let i = 0; i < process.length; i++) {
        if (process[i] == "a") {
            process[i] = "ai";
        } else if (process[i] == "e") {
            process[i] = "enter";
        } else if (process[i] == "i") {
            process[i] = "imes";

        } else if (process[i] == "o") {
            process[i] = "ober";
        } else if (process[i] == "u") {
            process[i] = "ufat";
        }
        result += process[i];
    }

    return result;
}

function verifyMessage(message) {
    if (!/[a-z]/.exec(message)) {
        alert("Por favor, solo ingresar letras minúsculas sin acentos ni caracteres especiales");
        return false;
    }
    return true;
}