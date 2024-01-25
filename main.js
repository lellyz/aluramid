function tocaSom(idAudio) {
    const elementoAudio = document.querySelector(idAudio);
    if (elementoAudio && elementoAudio.localName === 'audio') {
        elementoAudio.play();
    } 
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    };
};

var listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const teclaSom = tecla.classList[1];    
    const idAudio = `#som_${teclaSom}`; //template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
            listaTeclas[i].classList.add('ativa');
        };
    };

    tecla.onkeyup = function() {  
        listaTeclas[i].classList.remove('ativa');
    };
};
