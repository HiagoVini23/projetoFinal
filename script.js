function gerenciarAltoContraste() {
    console.log("funcao gerenciar alto contraste");

    $("body").css("background-color", "black");
    $("#secao4").css("background-color", "black");
    $("#secao4").css("color", "white");
    $("#secao5").css("background-color", "black");
    $("#secao5").css("color", "white");
    $("#jumbotron").css("background-color", "#343a40");
    $("#jumbotron").css("color", "white");
    $("#secao6").css("background-color", "black");
    $("#secao6").css("color", "white");
    $("#secao7").css("background-color", "black");
    $("#secao7").css("color", "white");
    $(".form-group").css("color", "white");
    $(".links").css("color", "white");
    
}

function ativarExtra() {
    console.log("funcao ativar extra");

    $("body").css("background-color", "#836FFF");
    $("#secao4").css("background-color", "#836FFF");
    $("#secao4").css("color", "white");
    $("#secao5").css("background-color", "#836FFF");
    $("#secao5").css("color", "white");
    $("#jumbotron").css("background-color", "#483D8B");
    $("#jumbotron").css("color", "white");
    $("#secao6").css("background-color", "#836FFF");
    $("#secao6").css("color", "white");
    $("#secao7").css("background-color", "#836FFF");
    $("#secao7").css("color", "white");
    $(".form-group").css("color", "white");
    $(".links").css("color", "white");

}

function ativarPadrao() {
    console.log("funcao ativar padrao");

    $("body").css("background-color", "white");
    $("#secao4").css("background-color", "white");
    $("#secao4").css("color", "black");
    $("#secao5").css("background-color", "white");
    $("#secao5").css("color", "black");
    $("#jumbotron").css("background-color", "#e9ecef");
    $("#jumbotron").css("color", "black");
    $("#secao6").css("background-color", "white");
    $("#secao6").css("color", "black");
    $("#secao7").css("background-color", "white");
    $("#secao7").css("color", "black");
    $(".form-group").css("color", "black");
    $(".links").css("color", "black");
}

window.onload = function (){

    $("#temaAC").on("click", gerenciarAltoContraste);
    $("#temaExtra").on("click", ativarExtra);
    $("#temaPadrao").on("click", ativarPadrao);

    $('nav a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $("nav").innerHeight();
    
        console.log(menuHeight);
    
        console.log(id);
    
        $('html, body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
    });
};


