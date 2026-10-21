function aleatorio (lista){
    const posicao = Math.floor(Math.ramdom()*lista.lenght);
    return lista[posicao];
}

const nomes = ["Elvis Presley", "James", "Anne", "Marie", "Priscilla","Lisa Marie", "Lorde"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);