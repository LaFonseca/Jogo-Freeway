function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], CarroComprimento, CarroLargura);
  }
}

function movimentaCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
  
}

function voltaPosicaoInicialCarro(){
  for ( let i = 0; i < imagemCarros.length; i++){
    if(passouTela(xCarros[i])){
      xCarros[i] = 600;
  }
 }
}

function passouTela(xCarros){
  return xCarros < -40;
}


// lista de carros
let yCarros = [40, 96, 156, 210, 270, 318]
let velocidadeCarros = [6.1, 5.9, 5.5, 6.5, 4.5, 4.9]
let CarroComprimento = 40;
let CarroLargura = 30;
let xCarros = [600, 600, 600, 600, 600, 600]



