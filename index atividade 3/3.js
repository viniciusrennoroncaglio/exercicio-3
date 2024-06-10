document.getElementById('formVendas').addEventListener('submit', function(event) {
    event.preventDefault();
    var quantidadePaes = parseInt(document.getElementById('quantidadePaes').value);
    var quantidadeBroas = parseInt(document.getElementById('quantidadeBroas').value);
    var totalVendas = calcularTotalVendas(quantidadePaes, quantidadeBroas);
    var poupanca = calcularPoupanca(totalVendas);
    exibirResultado(totalVendas, poupanca);
});

function calcularTotalVendas(quantidadePaes, quantidadeBroas) {
    var precoPaes = 0.12;
    var precoBroas = 1.50;
    return (quantidadePaes * precoPaes) + (quantidadeBroas * precoBroas);
}

function calcularPoupanca(totalVendas) {
    return totalVendas * 0.10; // 10% do total de vendas
}

function exibirResultado(totalVendas, poupanca) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Resultados:</h2><p>Total arrecadado com as vendas: R$ ' + totalVendas.toFixed(2) + '</p><p>Valor a ser guardado na poupança: R$ ' + poupanca.toFixed(2) + '</p>';
}