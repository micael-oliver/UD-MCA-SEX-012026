let lojaInformatica = [
    {nome: "Monitor", cor: "Preto", preco: 599.00, estoque: 13},
    {nome: "Teclado", cor: "cinza", preco: 159.00, estoque: 50},
    {nome: "Mouse",   cor: "Branco", preco: 90.00, estoque: 30},
    {nome: "Headset", cor: "Preto", preco: 300.00, estoque: 20},
    {nome: "Mousepad", cor: "Azul Escuro", preco: 80, estoque: 15},
    {nome: "Gabinete", cor: "Transparente", preco: 400, estoque: 18},
    {nome: "Impressora", cor: "Preto", preco: 600.00, estoque: 20},
    {nome: "Repetidor de Wi-fi", cor: "Branco", preco: 120, estoque: 10},
    {nome: "Cabo HDMI", cor: "Preto", preco: 50.00, estoque: 100},
    {nome: "Pasta para nootebook", cor: "Preto", preco: 80.00, estoque: 43}
]

// A. Qual é o preço do segundo objeto?
lojaInformatica[1].preco // 159.00

// B. Qual é o nome do terceiro objeto?
lojaInformatica[2].nome // Headset

// C. Quantos itens existem no array?
lojaInformatica.length // 10

// D. Imprima o nome de todos os objetos.
for(let i = 0; i < lojaInformatica.length; i++) {
    console.log(lojaInformatica[i].nome)
}

// E. Some o total de estoque de todos os objetos.
let total = 0;
for(let i = 0; i < lojaInformatica.length; i++){
    total += lojaInformatica[i].estoque;
}

// F. Qual objeto possui maior estoque?
lojaInformatica[8].nome // Cabo HDMI