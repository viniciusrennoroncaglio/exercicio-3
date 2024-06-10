document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const days = parseInt(document.getElementById('days').value);

    const years = Math.floor(days / 360); // 1 ano = 360 dias
    const months = Math.floor((days % 360) / 30); // 1 mês = 30 dias
    const remainingDays = days % 30;

    document.getElementById('result').innerText = `Tempo sem acidentes: ${years} anos, ${months} meses e ${remainingDays} dias.`;
});
