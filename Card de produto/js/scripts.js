function gif(imagem, caminhoNovaImagem) {
  document.getElementById(imagem).src = caminhoNovaImagem;
  if (btn360.style.display != "none") {
    document.getElementById("btn360").style.display = "none";
  } else {
    document.getElementById("btn360").style.display = "block";
  }
}