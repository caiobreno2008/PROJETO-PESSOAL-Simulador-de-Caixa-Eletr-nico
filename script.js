// Variáveis iniciais
let saldo = 1000; // Saldo inicial
let continuar = true // Flag para continuar o loop do menu

// Função para mostrar o menu e processar a escolha
function mostrarMenu() {
    alert("=== Menu do Caixa Eletrônico ===\n" +
          "1. Verificar Saldo\n" +
          "2. Saque\n" +
          "3. Depósito\n" +
          "4. Sair")

    const escolha = prompt("Escolha uma opção (1-4):")

    switch (escolha) {
        case "1":
            verificarSaldo()
            break;
        case "2":
            realizarSaque()
            break
        case "3":
            realizarDeposito()
            break
        case "4":
            alert("Obrigado por usar o caixa eletrônico. Até logo!")
            continuar = false // Termina o loop
            break
        default:
            alert("Opção inválida. Tente novamente.")
            break
    }
}

// Função para verificar o saldo
function verificarSaldo() {
    alert(`Seu saldo atual é: R$ ${saldo.toFixed(2)}`)
}

// Função para realizar um saque
function realizarSaque() {
    const valor = prompt("Digite o valor do saque:")
    const valorNum = Number(valor); // Converte a entrada para número

    // Verifica se o valor é um número positivo e se o campo não está vazio
    if (valor === "" || valorNum <= 0) {
        alert("Valor inválido. O saque deve ser um número positivo.");
    } else if (valorNum > saldo) {
        alert("Saldo insuficiente para o saque.")
    } else {
        saldo -= valorNum;
        alert(`Saque de R$ ${valorNum.toFixed(2)} realizado com sucesso.`)
    }
}

// Função para realizar um depósito
function realizarDeposito() {
    const valor = prompt("Digite o valor do depósito:")
    const valorNum = Number(valor); // Converte a entrada para número

    // Verifica se o valor é um número positivo e se o campo não está vazio
    if (valor === "" || valorNum <= 0) {
        alert("Valor inválido. O depósito deve ser um número positivo.")
    } else {
        saldo += valorNum;
        alert(`Depósito de R$ ${valorNum.toFixed(2)} realizado com sucesso.`)
    }
}

// Loop principal para o menu
do {
    mostrarMenu()
} while (continuar)
