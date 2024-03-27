$(document).ready(function () {
    certa.eventos.init();
})

var certa = {};

certa.eventos = {
    init: () => {
    }
}

certa.metodos = {
        // abre o depoimento
        abrirDepoimento: (depoimento) => {
    
            $("#depoimento-1").addClass('hidden');
            $("#depoimento-2").addClass('hidden');
            $("#depoimento-3").addClass('hidden');
            $("#depoimento-4").addClass('hidden');
    
            $("#btnDepoimento-1").removeClass('active');
            $("#btnDepoimento-2").removeClass('active');
            $("#btnDepoimento-3").removeClass('active');
            $("#btnDepoimento-4").removeClass('active');
    
            $("#depoimento-" + depoimento).removeClass('hidden');
            $("#btnDepoimento-" + depoimento).addClass('active');
    
        },
}

certa.templates = {

}

function openNav(){
    document.getElementById("myNav").style.width = '100%'
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%'
}