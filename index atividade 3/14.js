document.getElementById('billForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalBill = parseFloat(document.getElementById('totalBill').value);

    const amountForCarlosAndAndre = Math.floor(totalBill / 3); // Carlos e André não pagam centavos
    const amountForFelipe = totalBill - 2 * amountForCarlosAndAndre;

    document.getElementById('result').innerHTML = `
        <p>Carlos deve pagar: R$ ${amountForCarlosAndAndre.toFixed(2)}</p>
        <p>André deve pagar: R$ ${amountForCarlosAndAndre.toFixed(2)}</p>
        <p>Felipe deve pagar: R$ ${amountForFelipe.toFixed(2)}</p>
    `;
});
