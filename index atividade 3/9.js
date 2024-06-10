document.getElementById('distanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    document.getElementById('result').innerText = `A distância entre os dois pontos é ${distance.toFixed(2)}.`;
});
