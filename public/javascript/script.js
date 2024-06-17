function logar() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    
    var usuarioTrue = "Caio";
    var senhaTrue = "Caio123";
    
    if (usuario !== usuarioTrue || senha !== senhaTrue) {
        alert("Você inseriu usuário ou senha incorretos");
        document.getElementById("usuario").value = "";
        document.getElementById("senha").value = "";
        
    } else {
        alert(`Login realizado com sucesso ${usuario}. Mergulhe no universo das corridas sustentáveis!`);
        window.location.href = "/src/pages/index/index.html";
        document.getElementById("usuario").value = "";
        document.getElementById("senha").value = "";
    }

}


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images-carrossel img');
    const prevButton = document.querySelector('.button-prev');
    const nextButton = document.querySelector('.button-next');
    let currentIndex = 0;

    images[currentIndex].style.display = 'block';

    prevButton.addEventListener('click', () => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        images[currentIndex].style.display = 'block';
    });

    nextButton.addEventListener('click', () => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        images[currentIndex].style.display = 'block';
    });
});

