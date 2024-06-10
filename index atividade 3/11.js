document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const salary = parseFloat(document.getElementById('salary').value);

    const increase = salary * 0.15; // Aumento de 15%
    const newSalary = salary + increase;
    const tax = newSalary * 0.08; // Imposto de 8%
    const finalSalary = newSalary - tax;

    document.getElementById('result').innerHTML = `
        <p>Salário Inicial: R$ ${salary.toFixed(2)}</p>
        <p>Salário com Aumento (+15%): R$ ${newSalary.toFixed(2)}</p>
        <p>Salário Final (com desconto de impostos): R$ ${finalSalary.toFixed(2)}</p>
    `;
});
