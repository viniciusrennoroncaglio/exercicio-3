document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const daysInMonth = 30; // Considerando que cada mês tem 30 dias

    // Verifica se a entrada é válida
    if (day < 1 || day > daysInMonth || month < 1 || month > 12) {
        document.getElementById('result').innerText = 'Por favor, insira uma data válida.';
        return;
    }

    // Calcula o número de dias desde o início do ano
    const daysSinceStartOfYear = (month - 1) * daysInMonth + day;
    document.getElementById('result').innerText = `Desde o início do ano até a data informada passaram-se ${daysSinceStartOfYear} dias.`;
});
