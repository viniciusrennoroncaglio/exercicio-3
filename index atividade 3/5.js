document.getElementById('formGasolina').addEventListener('submit', function(event) {
    event.preventDefault();
    var precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    var valorPagamento = parseFloat(document.getElementById('valorPagamento').value);
    var litros = calcularLitros(precoGasolina, valorPagamento);
    exibirResultado(litros);
});

function calcularLitros(precoGasolina, valorPagamento) {
    // Calcula quantos litros o motorista pode comprar com o valor do pagamento
    return valorPagamento / precoGasolina;
}

function exibirResultado(litros) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Resultado:</h2><p>O motorista conseguiu colocar ' + litros.toFixed(2) + ' litros de gasolina no tanque.</p>';
}