document.getElementById('formTerreno').addEventListener('submit', function(event) {
    event.preventDefault();
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);
    var area = calcularArea(comprimento, largura);
    exibirResultado(area);
});

function calcularArea(comprimento, largura) {
    return comprimento * largura;
}

function exibirResultado(area) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Área do Terreno:</h2><p>' + area + ' metros quadrados</p>';
}