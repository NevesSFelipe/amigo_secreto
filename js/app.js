function adicionar() {

    const input_nome_amigo = document.getElementById("nome-amigo");
    const p_lista_amigos = document.getElementById("lista-amigos");

    let nome_amigo = input_nome_amigo.value;
    let nomes_participantes = p_lista_amigos.textContent;
    
    if(!nome_amigo) {
        alert("Por favor, informe o nome de um participante");
        return;
    }

    if(!nomes_participantes) {
        p_lista_amigos.textContent = nome_amigo;
    } else {
        p_lista_amigos.textContent = `${nomes_participantes}, ${nome_amigo}`;
    }

    input_nome_amigo.value = "";
    input_nome_amigo.focus();

}

function sortear() {

    const p_lista_amigos = document.getElementById("lista-amigos");
    const p_lista_sorteio = document.getElementById("lista-sorteio");

    let amigos_participantes = p_lista_amigos.textContent;
    let array_amigos_participantes = amigos_participantes.split(", ");
    
    let posicao_amigo_selecionado = 0;
    let amigo_selecionado = "";
    
    let array_amigos_selecionados = [];
    let objeto_amigos_sorteados = [];

    while(array_amigos_selecionados.length < array_amigos_participantes.length) {

        posicao_amigo_selecionado = Math.floor(Math.random() * array_amigos_participantes.length);
        amigo_selecionado = array_amigos_participantes[posicao_amigo_selecionado];
        
        if(array_amigos_selecionados.indexOf(amigo_selecionado) == -1) {
            array_amigos_selecionados.push(amigo_selecionado);
        }        
    }

    for(let i = 0; i < array_amigos_selecionados.length; i++) {

        if(i != (array_amigos_selecionados.length - 1)) {
            objeto_amigos_sorteados.push({"sorteador": array_amigos_selecionados[i], "sorteado": array_amigos_selecionados[i + 1]});
        } else {
            objeto_amigos_sorteados.push({"sorteador": array_amigos_selecionados[i], "sorteado": array_amigos_selecionados[0]});
        }
    }

    objeto_amigos_sorteados.forEach((nome) => {
        p_lista_sorteio.innerHTML += `${nome.sorteador} => ${nome.sorteado} <br>`;
    });

}

function reiniciar() {
    window.location.reload();
}
