// Mensagem de boas-vindas
window.addEventListener("load", function () {
    alert("Bem-vindo ao currículo de João Gabriel Zangalli!");
});

// Toggle de habilidades
document.getElementById("btn-toggle").addEventListener("click", function () {
    const habilidades = document.getElementById("habilidades");
    habilidades.style.display = (habilidades.style.display === "none") ? "block" : "none";
});

// Envio de formulário
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
});

// Canvas: desenho simples
const canvas = document.getElementById("meuCanvas");
if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#007acc";
    ctx.fillRect(20, 20, 160, 160);
    ctx.fillStyle = "#fff";
    ctx.font = "16px Arial";
    ctx.fillText("JS Canvas", 50, 100);
}


// Mensagem de boas-vindas ao carregar a página
window.addEventListener('load', function() {
    alert('Bem-vindo(a) ao meu currículo online!');
});

// Alterar cor de fundo ao enviar formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.body.style.backgroundColor = '#eef7ff';
    alert('Obrigado pelo contato! Retornarei em breve.');
});
