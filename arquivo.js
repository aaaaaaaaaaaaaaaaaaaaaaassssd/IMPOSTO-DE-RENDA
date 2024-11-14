// Função para calcular o Imposto de Renda
function calcularImposto() {
    let salario = document.getElementById('salario').value;
    let deducoes = document.getElementById('deducoes').value;
    
    // Convertendo os valores para números
    salario = parseFloat(salario);
    deducoes = parseFloat(deducoes);
    
    // Base de cálculo
    let baseCalculo = salario - deducoes;

    // Cálculo do imposto
    let imposto = 0;
    if (baseCalculo <= 1903.98) {
        imposto = 0;
    } else if (baseCalculo <= 2826.65) {
        imposto = baseCalculo * 0.075;
    } else if (baseCalculo <= 3751.05) {
        imposto = baseCalculo * 0.15;
    } else if (baseCalculo <= 4664.68) {
        imposto = baseCalculo * 0.225;
    } else {
        imposto = baseCalculo * 0.275;
    }

    // Exibindo o resultado
    document.getElementById('resultado').innerText = 'Imposto a Pagar: R$ ' + imposto.toFixed(2);
}

// Função para calcular o imposto com o salário
function calcularImpostoSalario() {
    let salario = document.getElementById('salario2').value;

    // Convertendo o valor para número
    salario = parseFloat(salario);

    // Base de cálculo
    let baseCalculo = salario;

    // Cálculo do imposto
    let imposto = 0;
    if (baseCalculo <= 1903.98) {
        imposto = 0;
    } else if (baseCalculo <= 2826.65) {
        imposto = baseCalculo * 0.075;
    } else if (baseCalculo <= 3751.05) {
        imposto = baseCalculo * 0.15;
    } else if (baseCalculo <= 4664.68) {
        imposto = baseCalculo * 0.225;
    } else {
        imposto = baseCalculo * 0.275;
    }

    // Exibindo o resultado
    document.getElementById('resultado-salario').innerText = 'Imposto a Pagar: R$ ' + imposto.toFixed(2);
}