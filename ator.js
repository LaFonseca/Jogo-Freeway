
// variáveis do ator

let xAtor = 85;
let yAtor = 366;
let atorAltura = 28;
let atorLargura = 25;
let colisao = false;
let meusPontos = 0;


// todas as funções
function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, atorAltura, atorLargura);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){
     if ( podeSeMover()){
        yAtor += 3;
  }
 }
}

function verificaColisao(){
  for ( let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], CarroComprimento, CarroLargura, xAtor, yAtor, 15)
    if(colisao){
      colidiu();
      somDaColisao.play();
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 26);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
  }
}

function recomeca(){
  if (yAtor < 15){
    yAtor = 366;
  }
}

function perdePonto(){
  if (colisao){
    meusPontos -= 1;
  }
}

function podeSeMover(){
  return yAtor < 366; 
}




