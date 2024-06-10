document.getElementById('saleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const smallQty = parseInt(document.getElementById('small').value);
    const mediumQty = parseInt(document.getElementById('medium').value);
    const largeQty = parseInt(document.getElementById('large').value);

    const smallPrice = 10;
    const mediumPrice = 12;
    const largePrice = 15;

    const total = (smallQty * smallPrice) + (mediumQty * mediumPrice) + (largeQty * largePrice);
    
    document.getElementById('total').innerText = `O valor arrecadado será de R$${total.toFixed(2)}.`;
});
