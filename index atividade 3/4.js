document.getElementById('formIdade').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value;
    var idade = parseInt(document.getElementById('idade').value);
    var diasDeVida = calcularDiasDeVida(idade);
    exibirResultado(nome, diasDeVida);
});

function calcularDiasDeVida(idade) {
    var diasPorAno = 365;
    return idade * diasPorAno;
}

function exibirResultado(nome, diasDeVida) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h2>Resultado:</h2><p>' + nome.toUpperCase() + ', você já viveu ' + diasDeVida + ' dias.</p>';
}