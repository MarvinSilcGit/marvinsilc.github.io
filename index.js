function mudar_conteudo_elemento() {

  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function mudar_cor_elemento(){

  const paragrafo = document.querySelector('#paragrafo');

  paragrafo.addEventListener('click', ()=> {

    const elemento_paragrafo = document.querySelector('#paragrafo');

    elemento_paragrafo.style.color = 'red';

  });
}

function mudar_cor_pagina(){

  const paragrafo = document.querySelector('body');

  paragrafo.addEventListener('click', ()=> {

    const elemento = document.querySelector('body');

    elemento.style.backgroundColor = 'red';

  });
}

function ultima_modificacao_pagina(){

  let ultima_modificacao = document.lastModified;

  document.getElementById("last_mod").innerHTML = ultima_modificacao;
}