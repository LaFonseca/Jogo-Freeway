// canvas
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

// funções para funcionar o jogo
function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  recomeca();
  perdePonto();
}









