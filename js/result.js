function result(result) {
    let fillDiv = `<textarea name="text-result" id="text-result"></textarea>
                   <br>
                   <button class="btn btn-primary" id="copy" onclick="copy()">Copiar</button>`;
    $(".result").empty();
    $(".result").append(fillDiv);

    $("#text-result").val(result);
}

function copy() {
    $("#text-result").select();
    document.execCommand("copy");
}

function defaultResult() {
    let restoreDiv = `<img src="img/muñeco.png" class="searching" alt="Image.png">
                      <h5 class="fw-bold">Ningún mensaje fue encontrado</h5>
                      <p>Ingresa el texto que desees encriptar o desencriptar</p>`;
    $(".result").empty();
    $(".result").append(restoreDiv);
}