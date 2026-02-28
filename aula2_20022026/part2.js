let lojaInformatica = {
    nome: "Monitor",
    cor: "Preto",
    preco: 500.00,
    estoque: 10
};

// A. Como acessar o nome do objeto?
lojaInformatica.nome

// B. Como acessar o preço usando colchetes?
lojaInformatica["preco"]

// C. Atualize o estoque para 80.
lojaInformatica.estoque = 80;

// D. Imprima todas as propriedades no console.
console.log(" Nome: " + lojaInformatica.nome + "\n Cor: " + lojaInformatica.cor + "\n Preço: " + lojaInformatica.preco + "\n Estoque: " + lojaInformatica.estoque)