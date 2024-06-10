document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const number = parseInt(document.getElementById('number').value);

    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;

    document.getElementById('result').innerHTML = `
        <p>CENTENA = ${hundreds}</p>
        <p>DEZENA = ${tens}</p>
        <p>UNIDADE = ${units}</p>
    `;
});
