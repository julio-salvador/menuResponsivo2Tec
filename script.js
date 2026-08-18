let fontTamanho = 16;
const corpo = document.body;

const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");

aumentar.addEventListener("click", function(){
    fontTamanho += 2;
    corpo.style.fontSize = fontTamanho + "px";
});

diminuir.addEventListener("click", function(){
    if (fontTamanho > 10){
        fontTamanho -= 2;
        corpo.style.fontSize = fontTamanho + "px";
    }
});