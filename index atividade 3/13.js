document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const radius = parseFloat(document.getElementById('radius').value);
    const pi = 3.14;

    const area = pi * Math.pow(radius, 2);

    document.getElementById('result').innerText = `A área da pizza é aproximadamente ${area.toFixed(2)} cm².`;
});
