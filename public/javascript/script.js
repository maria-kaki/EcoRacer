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