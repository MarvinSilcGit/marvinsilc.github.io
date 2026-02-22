function dark_mode(){

    let elemento = document.body;
    
    elemento.classList.toggle("dark-mode");
}

function abrir_menu_lateral(){
    
    document.getElementById("navegar_esquerda").style.width = "100%";
}

function fechar_menu_lateral(){
    
    document.getElementById("navegar_esquerda").style.width = "0";
}