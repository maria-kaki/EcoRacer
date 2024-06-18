function logar() {
    var usuario = document.getElementById("usuario").value.toLowerCase();
    var senha = document.getElementById("senha").value.toLowerCase();
    
    var usuarioTrue = "caio";
    var senhaTrue = "caio123";
    
    if (usuario !== usuarioTrue || senha !== senhaTrue) {
        alert("Você inseriu usuário ou senha incorretos");
        document.getElementById("usuario").value = "";
        document.getElementById("senha").value = "";
        
    } else {
        const usuarioFinal = usuario.charAt(0).toUpperCase() + usuario.slice(1);
        alert(`Login realizado com sucesso ${usuarioFinal}. Mergulhe no universo das corridas sustentáveis!`);
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

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.form-contato');
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const usuario = document.getElementById('usuario').value;
      const email = document.getElementById('email').value;
      const descricao = document.getElementById('descricao').value;

      function limparCampos() {
        document.getElementById('usuario').value = '';
        document.getElementById('email').value = '';
        document.getElementById('descricao').value = '';
      }

      setTimeout(() => {
        const resposta = document.getElementById('resposta');
        resposta.innerHTML = `
          <h1>Recebemos sua mensagem!</h1>
          <p>Olá ${usuario}! Enviaremos um e-mail para ${email} respondendo sua mensagem "${descricao}"!</p>
        `;
        limparCampos();
      }, 100);
    });
});