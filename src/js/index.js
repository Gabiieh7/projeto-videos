const videosSecundarios = document.querySelectorAll('.video-secundario');


videosSecundarios.forEach((videoSecundario) => {
    videoSecundario.addEventListener('click', function () {
        const dataNameSelecionado = videoSecundario.getAttribute('data-name');
        selecionarVideo(videoSecundario);
        removerVideoSelecionado();
        const videosPrincipais = document.querySelectorAll('.video-principal');
        videosPrincipais.forEach((videoPrincipal) => {
            const idSelecionado = videoPrincipal.attributes.id.value

            if (idSelecionado == dataNameSelecionado) {
                videoPrincipal.classList.add('selecionado');
                videoPrincipal.firstElementChild.src = `./src/video/${dataNameSelecionado}.mp4`
            } else { return }
        })
    })
})
function selecionarVideo(videoSecundario) {
    const videoNaoSelecionado = document.querySelector('.nao-selecionado');
    videoNaoSelecionado.classList.remove('nao-selecionado');
    videoSecundario.classList.add('nao-selecionado');
}

function removerVideoSelecionado() {
    const videoSelecionado = document.querySelector('.selecionado');
    videoSelecionado.classList.remove('selecionado');
    videoSelecionado.firstElementChild.src = '';
}

