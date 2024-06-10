document.getElementById('formRefeicao').addEventListener('submit', function(event) {
    event.preventDefault();
    var pesoRefeicao = parseFloat(document.getElementById('pesoRefeicao').value);
    var valorPagar = calcularValorPagar(pesoRefeicao);
    exibirResultado(valorPagar);
});

function calcularValorPagar(pesoRefeicao) {
    var precoPorQuilo = 12.00;
    return precoPorQuilo * pesoRefeicao;
}

function exibirResultado(valorPagar) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Resultado:</h2><p>O valor a pagar é R$ ' + valorPagar.toFixed(2) + '</p>';
}