const listaMercado = [
    "Arroz", "Feijão", "Extrato de Tomate", "Farinha",
    "Café","Filtro de papel para café", "Suco em pó", 
    "Carne", "Iourgute", "Nescau", "Leite", "Açucar", 
    "Papel higiênico", "Tomate", "Macarrão", "Papel toalha",
    "Coca Cola","Sabonete","Detergente","Pasta de dente"]


// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log(listaMercado[0]) // Arroz
console.log(listaMercado[7]) // Carne
console.log(listaMercado[11]) // Açucar
console.log(listaMercado[15]) // Papel Toalha
console.log(listaMercado[18]) // Detergente
console.log(listaMercado[20]) // undefined


// B. Qual elemento está na penúltima e última posição?
console.log(listaMercado[18]) //Detergente
console.log(listaMercado[19]) //Pasta de dente

// C. Quantos elementos existem no array?
console.log(listaMercado.length) // 20 elementos

// D. Adicione um novo elemento ao final do array.
listaMercado.push("Ketchup")

// E. Imprima todos os elementos usando um for.
for(let i = 0; i < listaMercado.length; i++){
    console.log(listaMercado[i])
}