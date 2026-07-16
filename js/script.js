// Seleciona o botão flutuante de volta ao topo
const btnTopo = document.getElementById("btnTopo");

// Monitora o scroll da página para mostrar ou esconder o botão
window.addEventListener("scroll", function () {

    // Exibe o botão apenas em telas menores que 992px e após rolar 200px
    if (window.innerWidth < 992 && window.scrollY > 200) {
        btnTopo.classList.add("ativo");
    } else {
        btnTopo.classList.remove("ativo");
    }

});

// Faz a página voltar ao início com efeito suave ao clicar no botão
btnTopo.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});