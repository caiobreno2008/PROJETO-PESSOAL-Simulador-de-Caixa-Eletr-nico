// Initial variables
let balance = 1000 // Saldo inicial
let shouldContinue = true // Flag para continuar o loop do menu

// Função para mostrar o menu e processar a escolha
const showMenu = () => {
    alert("=== Menu do Caixa Eletrônico ===\n" +
          "1. Verificar Saldo\n" +
          "2. Saque\n" +
          "3. Depósito\n" +
          "4. Sair")

    const choice = prompt("Escolha uma opção (1-4):")

    switch (choice) {
        case "1":
            checkBalance()
            break
        case "2":
            makeWithdrawal()
            break
        case "3":
            makeDeposit()
            break
        case "4":
            alert("Obrigado por usar o caixa eletrônico. Até logo!")
            shouldContinue = false // Termina o loop
            break
        default:
            alert("Opção inválida. Tente novamente.")
            break
    }
}

// Função para verificar o saldo
const checkBalance = () => {
    alert(`Seu saldo atual é: R$ ${balance}`)
}

// Função para realizar um saque
const makeWithdrawal = () => {
    const amount = prompt("Digite o valor do saque:")
    const amountNum = Number(amount) // Converte a entrada para um número

    // Verifica se o valor é um número positivo e se o campo não está vazio
    if (amount === "" || amountNum <= 0) {
        alert("Valor inválido. O saque deve ser um número positivo.")
    } else if (amountNum > balance) {
        alert("Saldo insuficiente para o saque.")
    } else {
        balance -= amountNum
        alert(`Saque de R$ ${amountNum} realizado com sucesso.`)
    }
}

// Função para realizar um depósito
const makeDeposit = () => {
    const amount = prompt("Digite o valor do depósito:")
    const amountNum = Number(amount) // Converte a entrada para um número

    // Verifica se o valor é um número positivo e se o campo não está vazio
    if (amount === "" || amountNum <= 0) {
        alert("Valor inválido. O depósito deve ser um número positivo.")
    } else {
        balance += amountNum
        alert(`Depósito de R$ ${amountNum} realizado com sucesso.`)
    }
}

// Loop principal para o menu
do {
    showMenu()
} while (shouldContinue)
