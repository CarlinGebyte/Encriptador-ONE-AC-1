$(document).ready(function () {
    $("#decrypt").click(function () {
        let message = $.trim($("#message").val());
        if (message != "") {
            if (verifyMessage(message)) {
                let regEx = [/ober/g, /ai/g, /imes/g, /enter/g, /ufat/g];
                decrypted = message;
                for (let i = 0; i < regEx.length; i++) {
                    let replaceTo = "";
                    if (regEx[i] == "/ober/g") {
                        replaceTo = "o";
                    } else if (regEx[i] == "/ai/g") {
                        replaceTo = "a";
                    } else if (regEx[i] == "/imes/g") {
                        replaceTo = "i";
                    } else if (regEx[i] == "/enter/g") {
                        replaceTo = "e";
                    } else if (regEx[i] == "/ufat/g") {
                        replaceTo = "u";
                    }
                    decrypted = decodeAll(decrypted, regEx[i], replaceTo);
                }
                result(decrypted);
                $("#message").val("");
            } else {
                defaultResult();
                $("#message").val("");
            }
        } else {
            defaultResult();
            alert("Por favor, ingresar un mensaje a desencriptar");
        }
    });
});

function decodeAll(message, regEx, replaceTo) {
    return message.replace(regEx, replaceTo)
}