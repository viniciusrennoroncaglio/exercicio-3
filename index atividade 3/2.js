document.getElementById('formCavalos').addEventListener('submit', function(event) {
    event.preventDefault();
    var numeroCavalos = parseInt(document.getElementById('numeroCavalos').value);
    var numeroFerraduras = calcularFerraduras(numeroCavalos);
    exibirResultado(numeroCavalos, numeroFerraduras);
});

function calcularFerraduras(numeroCavalos) {
    // Cada cavalo precisa de 4 ferraduras
    return numeroCavalos * 4;
}

function exibirResultado(numeroCavalos, numeroFerraduras) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Resultados:</h2><p>Para ' + numeroCavalos + ' cavalos, serão necessárias ' + numeroFerraduras + ' ferraduras.</p>';
}