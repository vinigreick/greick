function maisOpcoes() {
    const options = document.getElementById("options");
    options.style.display = options.style.display === "block" ? "none" : "block";
}

// Fecha as opções se o usuário clicar fora delas
window.onclick = function(event) {
    if (!event.target.matches('a')) {
        const options = document.getElementById("options");
        if (options.style.display === 'block') {
            options.style.display = 'none';
        }
    }
}