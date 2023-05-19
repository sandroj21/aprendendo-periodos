//Link GamePlay https://youtu.be/HHzInoPhFLI
//Link colabeduc http://colabeduc.org/projeto/show/1433

var dataInicial;
var tempoInicial;
var tempo = 0;
var tempoQuestao = 30;
var dataAtual;
var tempoAtual;
var qtdVidas = 5;
var errou = false;

var perguntas = [
  "A frase 'Choveu bastante hoje' possui quantos verbos?",
  "Uma frase contém 3 verbos. Que tipo de periodo se refere?",
  "'Veremos hoje o eclipse lunar'. Essa frase representa que tipo de período?",
  "A frase: 'Adoro jogar futebol.' se refere a qual tipo de período?",
  "'Que sorvete delicioso' é considerado período?",
];

var respostasCorretas = [
  1,
  "Período Composto",
  "Periodo Simples",
  "Periodo Simples",
  "Não",
];

var respostasErradas1 = [2, 3, 4];

var respostasErradas2 = [
  "Periodo Simples",
  "Periodo Principal",
  "Periodo complexo",
];
var respostasErradas3 = [
  "Periodo Completo",
  "Periodo Novo",
  "Nenhuma das alternativas acima",
];
var respostasErradas4 = [
  "Periodo Composto",
  "Periodo Principal",
  "Nenhuma das alternativas acima",
];
var respostasErradas5 = ["Sim", "NDA", "Nenhuma das alternativas acima"];

var sorteadas = [0, 0, 0, 0, 0];

var posicaoRespostaCerta;
var posicaoRespostaErrada;
var posicaoClicada;

var perguntaSorteada;
var faseAtual = 1;

//Declarando variáveis de imagem
let imgFundo;
let imgSetas;
let imgEsc;
let imgEnter;
let imgProgramador;
let imgEducador;
let imgSetinhaMenu;
let imgCreditos;
let imgInstrucoes;
let imgFase1;
let imgTelaZerada;
let imgSilencioso;
let imgTocando;
let imgQuadro;
let imgLife;

//Declarando variáveis de som
let somFundo;
let somSelecao;
let somToque;

//Declarando variáveis iniciais
var y = 85;

var opcaoTela = 0;
var telaExibida = 0;

var velocidadex = 750;

//Escolha das opcoes perguntas
var opcaoMarcadaPerguntas = 195;
var opcaoCorretaPergunta = 1;
var opcaoMarcada = 0;

//Fazendo upload dentro do preload
function preload() {
  //Preload de imagens
  imgSetas = loadImage("img/setas.png");
  imgEsc = loadImage("img/esc.jpg");
  imgEnter = loadImage("img/enter-key.png");
  imgProgramador = loadImage("img/fotoProgramador.jpg");
  imgEducador = loadImage("img/professora.jpeg");
  imgFundo = loadImage("img/letras.png");
  imgSetinhaMenu = loadImage("img/setinha.png");
  imgCreditos = imgFundo;
  imgInstrucoes = imgCreditos;
  imgFase1 = imgFundo;
  imgTelaZerada = imgFundo;
  imgTocando = loadImage("img/tocando.png");
  imgSilencioso = loadImage("img/silencioso.png");
  imgQuadro = loadImage("img/quadro.png");
  imgLife = loadImage("img/coracao.png");
  //Preload de sons
  somFundo = loadSound("sounds/melody.mp3");
  somToque = loadSound("sounds/toque.mp3");
}

function setup() {
  createCanvas(600, 500);
  outputVolume(0.1);
  somFundo.loop();
}

function draw() {
  background(220);

  //Alterando telas exibidas
  if (telaExibida == 0) {
    executarMenu();
  }

  if (telaExibida == 1) {
    jogar();
    opcaoTela = 4;
  }

  if (telaExibida == 2) {
    abrirInstrucoes();
  }

  if (telaExibida == 3) {
    abrirCreditos();
  }

  if (telaExibida == 4) {
    abrirConceitosIniciais();
  }

  if (telaExibida == 5) {
    abrirIntroducao();
  }

  if (telaExibida == 6) {
    abrirConceitosPeriodos();
  }

  if (telaExibida == 7) {
    abrirFase1();
  }

  if (telaExibida == 8) {
    abrirTelaZerou();
  }

  if (telaExibida == 9) {
    fill(0);
    textSize(24);
    text("GAME OVER!", 300, 260);

    var dataAtual = new Date();
    tempoAtual = dataAtual.getTime();
    tempo = tempoAtual - tempoInicial;

    if (tempo > 7000) {
      telaExibida = 0;
    }
  }

  if (telaExibida == 10) {
    abrirTelaAlternativa();
  }

  if (telaExibida == 11) {
    abrirTelaAcertoErro();
  }
}

//Função para controlar as opções através do teclado

//Funções para o Menu

function jogar() {
  fill(0);
  textSize(10);
  image(imgFase1, 0, 0);

  textSize(30);
  text("Olá! Seja bem-vindo!", 300, 50);

  fill(255, 215, 0);
  rect(560, 5, 30, 30, 13);
  if (outputVolume().value == 0.10000000149011612) {
    image(imgTocando, 565, 10, 20, 20);
  } else {
    image(imgSilencioso, 565, 10, 20, 20);
  }

  fill(234);
  rect(20, 150, 560, 115);
  fill(0);
  textSize(18);
  text(
    "Antes de prosseguirmos como nossa diversão,\n iremos aprender um pouquinho sobre frases, verbos e orações!",
    300,
    180
  );

  text("Vamos lá? Pressione o botão Continuar :D", 300, 240);

  fill("#FF4500");
  rect(240, 325, 120, 40, 12);
  fill(225);
  text("CONTINUAR", 300, 350);
}

function abrirInstrucoes() {
  image(imgInstrucoes, 0, -200);
  textSize(30);
  text("Instruções", 320, 50);

  fill(255, 215, 0);
  rect(560, 5, 30, 30, 13);
  if (outputVolume().value == 0.10000000149011612) {
    image(imgTocando, 565, 10, 20, 20);
  } else {
    image(imgSilencioso, 565, 10, 20, 20);
  }

  fill(240);
  rect(20, 80, 560, 372);

  image(imgQuadro, 23, 35, 90, 60);
  fill(0);
  textSize(20);
  textFont("Lobster");
  text(
    "Este game foi desenvolvido com objetivo de estimular o aprendizado\nde períodos simples e composto, introduzindo conceitos de \nfrase, verbo e oração aos alunos do 6º ano do Ensino Fundamental \nna disciplina de Língua Portuguesa.",
    300,
    120
  );

  text(
    "Habilidade BNCC Contemplada: \n(EF06LP09)Classificar, em texto ou sequência textual, \nos períodos simples compostos",
    300,
    240
  );

  text(
    "O jogo contém diversas fases, tendo seu inicio com o jogador absorvendo \ninicialmente os contéudos e, partindo disso, tem até 5 vidas no total para \nsobreviver. Na medida que vai avançando de fase, \na dificuldade aumenta, ficando cada vez mais difícil sobreviver!",
    300,
    360
  );

  fill(255, 215, 0);
  rect(505, 458, 70, 35, 12);
  textSize(14);

  fill(0);
  text("Voltar", 540, 480);
}

function abrirCreditos() {
  fill(0);
  image(imgCreditos, 0, 0);
  textSize(32);
  text("Créditos", 300, 50);

  fill(255, 215, 0);
  rect(560, 5, 30, 30, 13);
  if (outputVolume().value == 0.10000000149011612) {
    image(imgTocando, 565, 10, 20, 20);
  } else {
    image(imgSilencioso, 565, 10, 20, 20);
  }

  fill(0);
  //Créditos
  textSize(15);
  image(imgProgramador, 20, 75, 130, 200);
  text(
    "Programador: Sandro da Silva Fernandes Junior\n\nGraduando em Bacharelado em Ciências e Tecnologia - UFRN",
    380,
    165
  );
  image(imgEducador, 20, 290, 130, 200);
  text(
    "Orientadora: Maria Clara Lucena de Lemos\n\nGraduada em Licenciatura em Letras - Língua Portuguesa e\n Literaturas (UFRN); Especialista em Fundamentos Linguísticos \npara o Ensino da Leitura e da Escrita (UFRN); Mestra \ne Doutoranda em Estudos da Linguagem (UFRN).",
    380,
    340
  );

  fill(255, 215, 0);
  rect(505, 458, 70, 35, 12);
  //Rodapé dos créditos
  textSize(14);

  fill(0);
  text("Voltar", 540, 480);
}
function executarMenu() {
  image(imgFundo, 0, -200);
  textSize(22);
  textAlign(CENTER);

  //Opções

  fill(255);
  rect(200, 55, 238, 3, 12);

  textSize(25);
  fill(0);
  text("Aprendendo Períodos", 320, 50);

  if (mouseX >= 195 && mouseX <= 432 && mouseY >= y && mouseY <= 135) {
    fill(0);
    rect(195, 85, 238, 50, 14);
    fill(255);
    text("Jogar", 260, 100, 100, 200);
    fill(0);
    text("Instruções", 260, 225, 100, 200);
    text("Créditos", 260, 350, 100, 200);
  } else {
    if (mouseX >= 195 && mouseX <= 432 && mouseY >= 185 && mouseY <= 265) {
      fill(0);
      rect(195, 215, 238, 50, 14);
      text("Jogar", 260, 100, 100, 200);
      text("Créditos", 260, 350, 100, 200);
      fill(255);
      text("Instruções", 260, 230, 100, 200);
    } else {
      if (mouseX >= 195 && mouseX <= 432 && mouseY >= 285 && mouseY <= 385) {
        fill(0);
        rect(195, 335, 238, 50, 14);

        text("Jogar", 260, 100, 100, 200);

        text("Instruções", 260, 225, 100, 200);

        fill(255);
        text("Créditos", 260, 350, 100, 200);
      } else {
        fill(0);
        text("Jogar", 260, 100, 100, 200);
        text("Instruções", 260, 225, 100, 200);
        text("Créditos", 260, 350, 100, 200);
      }
    }
  }

  fill(0);

  //Posições das coordenadas X e Y
  textSize(10);
  textFont("Overpass");

  fill(255, 215, 0);
  rect(560, 5, 30, 30, 13);
  if (outputVolume().value == 0.10000000149011612) {
    image(imgTocando, 565, 10, 20, 20);
  } else {
    image(imgSilencioso, 565, 10, 20, 20);
  }

  //Rodapé
  fill(0);
  textSize(12);
  textFont("Overpass");

  //Loop Infinito do texto do Rodapé
  velocidadex = velocidadex - 1;
  text("Bora aprender um pouquinho? Let's go!", velocidadex, 494);

  if (velocidadex < -200) {
    velocidadex = 800;
  }
}

function abrirConceitosIniciais() {
  image(imgFundo, 0, -200);
  fill(0);
  textSize(20);
  textFont("Fresca");

  fill(255, 140, 0);
  rect(25, 20, 560, 90, 12);

  fill(0, 250, 154);
  rect(25, 124, 560, 120, 12);

  fill(238, 130, 238);
  rect(25, 260, 560, 100, 12);

  fill(0);
  text("Frase: Qualquer enunciado de sentido completo. ", 300, 40);
  text("Ex1: Socorro! | Ex2: Que sorvete delicioso!", 300, 100);

  text(
    "Verbo: Classe gramatical de palavras que representa uma \nação, estado, mudança de estado ou de algum \nfenômeno existente na natureza",
    300,
    150
  );

  text("Ex.: Escrever, Falar, Jogar, Comer, Dormir", 300, 230);

  text("Oração: Enunciado que se organiza em torno de um verbo.", 300, 285);

  text(
    "Ex1: Vamos! | Ex2: Preciso estudar para as lições,\n pois logo estarei de férias.",
    300,
    320
  );

  text("Agora que já sabe, vamos prosseguir :)", 220, 430);

  fill(111, 243, 41);
  rect(430, 380, 150, 90, 12);

  fill(0);
  text("Clique Aqui :D", 505, 430);
}

function abrirIntroducao() {
  image(imgFundo, 0, -200);
  textSize(30);
  text("Muito interessante, não é mesmo?", 315, 50);

  textFont("Fresca");
  textSize(20);
  text(
    "Aprendemos sobre Frases, Verbos e Orações, \nagora vamos dar inicio a três conceitos para começar a nossa diversão: \nPeríodo, Periodo Simples e Periodo Composto. ",
    300,
    150
  );

  fill(111, 243, 41);
  rect(230, 250, 150, 90, 12);
  fill(0);
  text("Continuar!", 300, 300);
}

function abrirConceitosPeriodos() {
  image(imgFundo, 0, -200);
  fill(0);
  textSize(20);
  textFont("Fresca");

  fill(0, 250, 154);
  rect(100, 185, 400, 40, 12);

  fill(238, 130, 238);
  rect(100, 305, 400, 60, 12);

  fill(0);
  textSize(25);

  text("Período: Frase que possui pelo menos uma oração. ", 300, 60);
  textSize(20);
  text(
    "Periodo Simples: Constitui-se apenas de uma oração\n(um verbo ou locução verbal).",
    300,
    135
  );

  text("Ex.: Minha familia toda esteve doente de gripe.", 300, 210);

  text(
    "Periodo Composto: Formado por duas ou mais orações\n(dois ou mais verbos ou locuções verbais)",
    300,
    260
  );

  text(
    "Ex1: Vou sair para esquecer todos os problemas!\nEx2: Sentei e refleti sobre a vida.",
    300,
    330
  );

  text(
    "Vamos nos divertir? Clique em Jogar!\nLembre-se: Você tem 5 vidas... ",
    220,
    430
  );

  fill(111, 243, 41);
  rect(500, 400, 90, 70, 12);

  fill(0);
  text("Jogar", 545, 440);
}

function abrirFase1() {
  fill(0);
  textFont("Shadows Into Light");

  image(imgFase1, 0, 0);

  if (qtdVidas == 5) {
    image(imgLife, 10, 23, 25, 20);
    image(imgLife, 40, 23, 25, 20);
    image(imgLife, 70, 23, 25, 20);
    image(imgLife, 100, 23, 25, 20);
    image(imgLife, 130, 23, 25, 20);
  } else {
    if (qtdVidas == 4) {
      image(imgLife, 10, 23, 25, 20);
      image(imgLife, 40, 23, 25, 20);
      image(imgLife, 70, 23, 25, 20);
      image(imgLife, 100, 23, 25, 20);
    } else {
      if (qtdVidas == 3) {
        image(imgLife, 10, 23, 25, 20);
        image(imgLife, 40, 23, 25, 20);
        image(imgLife, 70, 23, 25, 20);
      } else {
        if (qtdVidas == 2) {
          image(imgLife, 10, 23, 25, 20);
          image(imgLife, 40, 23, 25, 20);
        } else {
          if (qtdVidas == 1) {
            image(imgLife, 10, 23, 25, 20);
          } else {
            if (qtdVidas == 0) {
              telaExibida = 9;
            }
          }
        }
      }
    }
  }

  var dataAtual = new Date();
  tempoAtual = dataAtual.getTime();
  tempo = tempoAtual - tempoInicial;

  textFont("Lobster");
  textSize(25);
  if (tempo < 10000) {
    fill(0, 255, 0);
    rect(540, 17, 50, 50, 50);
    fill(0);
    text(tempoQuestao - parseInt(tempo / 1000), 565, 50);
  } else {
    if (tempo < 20000) {
      fill(255, 215, 0);
      rect(540, 17, 50, 50, 50);
      fill(0);
      text(tempoQuestao - parseInt(tempo / 1000), 565, 50);
    } else {
      if (tempo < 30000) {
        fill(235, 0, 0);
        rect(540, 17, 50, 50, 50);
        fill(0);
        text(tempoQuestao - parseInt(tempo / 1000), 565, 50);
      } else {
        if (tempo > 30000) {
          telaExibida = 10;
        }
      }
    }
  }

  textSize(30);
  text("Fase " + faseAtual, 300, 50);

  textSize(18);
  text(perguntas[perguntaSorteada], 300, 120);

  fill(230, 0, 0);
  rect(100, 165, 400, 70, 12);

  fill(255, 215, 0);
  rect(100, 250, 400, 70, 12);

  fill(0, 191, 255);
  rect(100, 335, 400, 70, 12);

  fill(111, 243, 41);
  rect(100, 415, 400, 70, 12);

  fill(255);
  textFont("Fresca");

  if (posicaoRespostaCerta == 0) {
    text(respostasCorretas[perguntaSorteada], 300, 206);
    if (perguntaSorteada == 0) {
      text(respostasErradas1[0], 300, 288);
      text(respostasErradas1[1], 300, 372);
      text(respostasErradas1[2], 300, 450);
    } else {
      if (perguntaSorteada == 1) {
        text(respostasErradas2[0], 300, 288);
        text(respostasErradas2[1], 300, 372);
        text(respostasErradas2[2], 300, 450);
      } else {
        if (perguntaSorteada == 2) {
          text(respostasErradas3[0], 300, 288);
          text(respostasErradas3[1], 300, 372);
          text(respostasErradas3[2], 300, 450);
        } else {
          if (perguntaSorteada == 3) {
            text(respostasErradas4[0], 300, 288);
            text(respostasErradas4[1], 300, 372);
            text(respostasErradas4[2], 300, 450);
          } else {
            if (perguntaSorteada == 4) {
              text(respostasErradas5[0], 300, 288);
              text(respostasErradas5[1], 300, 372);
              text(respostasErradas5[2], 300, 450);
            }
          }
        }
      }
    }
  } else {
    if (posicaoRespostaCerta == 1) {
      text(respostasCorretas[perguntaSorteada], 300, 288);
      if (perguntaSorteada == 0) {
        text(respostasErradas1[0], 300, 206);
        text(respostasErradas1[1], 300, 372);
        text(respostasErradas1[2], 300, 450);
      } else {
        if (perguntaSorteada == 1) {
          text(respostasErradas2[0], 300, 206);
          text(respostasErradas2[1], 300, 372);
          text(respostasErradas2[2], 300, 450);
        } else {
          if (perguntaSorteada == 2) {
            text(respostasErradas3[0], 300, 206);
            text(respostasErradas3[1], 300, 372);
            text(respostasErradas3[2], 300, 450);
          } else {
            if (perguntaSorteada == 3) {
              text(respostasErradas4[0], 300, 206);
              text(respostasErradas4[1], 300, 372);
              text(respostasErradas4[2], 300, 450);
            } else {
              if (perguntaSorteada == 4) {
                text(respostasErradas5[0], 300, 206);
                text(respostasErradas5[1], 300, 372);
                text(respostasErradas5[2], 300, 450);
              }
            }
          }
        }
      }
    } else {
      if (posicaoRespostaCerta == 2) {
        text(respostasCorretas[perguntaSorteada], 300, 372);
        if (perguntaSorteada == 0) {
          text(respostasErradas1[0], 300, 206);
          text(respostasErradas1[1], 300, 288);

          text(respostasErradas1[2], 300, 450);
        } else {
          if (perguntaSorteada == 1) {
            text(respostasErradas2[0], 300, 206);
            text(respostasErradas2[1], 300, 288);

            text(respostasErradas2[2], 300, 450);
          } else {
            if (perguntaSorteada == 2) {
              text(respostasErradas3[0], 300, 206);
              text(respostasErradas3[1], 300, 288);

              text(respostasErradas3[2], 300, 450);
            } else {
              if (perguntaSorteada == 3) {
                text(respostasErradas4[0], 300, 206);
                text(respostasErradas4[1], 300, 288);

                text(respostasErradas4[2], 300, 450);
              } else {
                if (perguntaSorteada == 4) {
                  text(respostasErradas5[0], 300, 206);
                  text(respostasErradas5[1], 300, 288);

                  text(respostasErradas5[2], 300, 450);
                }
              }
            }
          }
        }
      } else {
        if (posicaoRespostaCerta == 3) {
          text(respostasCorretas[perguntaSorteada], 300, 450);
          if (perguntaSorteada == 0) {
            text(respostasErradas1[0], 300, 206);
            text(respostasErradas1[1], 300, 288);
            text(respostasErradas2[2], 300, 372);
          } else {
            if (perguntaSorteada == 1) {
              text(respostasErradas2[0], 300, 206);
              text(respostasErradas2[1], 300, 288);
              text(respostasErradas2[2], 300, 372);
            } else {
              if (perguntaSorteada == 2) {
                text(respostasErradas3[0], 300, 206);
                text(respostasErradas3[1], 300, 288);
                text(respostasErradas3[2], 300, 372);
              } else {
                if (perguntaSorteada == 3) {
                  text(respostasErradas4[0], 300, 206);
                  text(respostasErradas4[1], 300, 288);
                  text(respostasErradas4[2], 300, 372);
                } else {
                  if (perguntaSorteada == 4) {
                    text(respostasErradas5[0], 300, 206);
                    text(respostasErradas5[1], 300, 288);
                    text(respostasErradas5[2], 300, 372);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function abrirTelaAcertoErro() {
  image(imgFundo, 0, -200);
  fill(0);

  textSize(30);

  if (posicaoClicada == posicaoRespostaCerta) {
    fill(0, 255, 0);
    text("Parabéns, você acertou!", 300, 270);
    dataAtual = new Date();
    tempoAtual = dataAtual.getTime();
    tempo = tempoAtual - tempoInicial;

    if (tempo > 3000) {
      telaExibida = 7;
    }
  } else {
    fill(255, 0, 0);
    text("Ihh, resposta errada! Suas vidas diminuiram!", 300, 270);
    dataAtual = new Date();
    tempoAtual = dataAtual.getTime();
    tempo = tempoAtual - tempoInicial;
    

    if (tempo > 4000) {
      telaExibida = 7;
    }
  }
}
function abrirTelaAlternativa() {
  image(imgFundo, 0, -200);
  fill(0);
  if (tempo > 30000) {
    text("Ihh, tempo esgotado!!!", 300, 300);
    dataInicial = new Date();
    tempoInicial = dataInicial.getTime();
  }

  text("Ihh, tempo esgotado!!!", 300, 300);

  var dataAtual = new Date();
  tempoAtual = dataAtual.getTime();
  tempo = tempoAtual - tempoInicial;

  if (tempo > 5000) {
    tempo = 0;
    qtdVidas--;
    telaExibida = 7;
  }
}

function abrirTelaZerou() {
  fill(0);
  image(imgTelaZerada, 0, 0);
  text("Parabéns! Você Concluiu o Jogo com Êxito!", 300, 250);
  var dataAtual = new Date();
  tempoAtual = dataAtual.getTime();
  tempo = tempoAtual - tempoInicial;

  if (tempo > 7000) {
    telaExibida = 0;
  }
}

function mouseClicked() {
  if (mouseX >= 565 && mouseX <= 590 && mouseY >= 10 && mouseY <= 35) {
    if (somFundo.isPlaying() && outputVolume().value == 0.10000000149011612) {
      outputVolume(0);
    } else {
      outputVolume(0.1);
    }
  }

  if (
    telaExibida == 0 &&
    mouseX >= 195 &&
    mouseX <= 432 &&
    mouseY >= y &&
    mouseY <= 135
  ) {
    opcaoTela = 1;
    telaExibida = opcaoTela;
  }

  if (
    telaExibida == 0 &&
    mouseX >= 195 &&
    mouseX <= 432 &&
    mouseY >= 185 &&
    mouseY <= 265
  ) {
    opcaoTela = 2;
    telaExibida = opcaoTela;
  }

  if (
    telaExibida == 0 &&
    mouseX >= 195 &&
    mouseX <= 432 &&
    mouseY >= 285 &&
    mouseY <= 385
  ) {
    opcaoTela = 3;
    telaExibida = opcaoTela;
  }

  if (
    (telaExibida == 3 || telaExibida == 2) &&
    mouseX >= 503 &&
    mouseX <= 574 &&
    mouseY >= 460 &&
    mouseY <= 492
  ) {
    telaExibida = 0;
  }

  if (
    telaExibida == 1 &&
    mouseX >= 237 &&
    mouseX <= 360 &&
    mouseY >= 325 &&
    mouseY <= 365
  ) {
    telaExibida = 4;
  }

  if (
    telaExibida == 4 &&
    mouseX >= 430 &&
    mouseX <= 578 &&
    mouseY >= 380 &&
    mouseY <= 470
  ) {
    telaExibida++;
  }

  if (
    telaExibida == 6 &&
    mouseX >= 500 &&
    mouseX <= 590 &&
    mouseY >= 400 &&
    mouseY <= 470
  ) {
    telaExibida = 7;
    dataInicial = new Date();
    tempoInicial = dataInicial.getTime();
  }

  if (
    telaExibida == 5 &&
    mouseX >= 230 &&
    mouseX <= 380 &&
    mouseY >= 250 &&
    mouseY <= 340
  ) {
    telaExibida = 6;
  }

  if (
    telaExibida == 7 &&
    mouseX >= 100 &&
    mouseX <= 500 &&
    mouseY >= 165 &&
    mouseY <= 235
  ) {
    posicaoClicada = 0;
    faseAtual++;
    telaExibida = 11;
    if(posicaoRespostaCerta != 0) {
      qtdVidas--;
    }
    
    sortearPergunta();
    
    dataInicial = new Date();
    tempoInicial = dataInicial.getTime();
  }

  if (
    telaExibida == 7 &&
    mouseX >= 100 &&
    mouseX <= 500 &&
    mouseY >= 250 &&
    mouseY <= 320
  ) {
    posicaoClicada = 1;
    
    faseAtual++;
    telaExibida = 11;
    if(posicaoRespostaCerta != 1) {
      qtdVidas--;
    }
    sortearPergunta();
  
    dataInicial = new Date();
    tempoInicial = dataInicial.getTime();
  }

  if (
    telaExibida == 7 &&
    mouseX >= 100 &&
    mouseX <= 500 &&
    mouseY >= 335 &&
    mouseY <= 405
  ) {
    posicaoClicada = 2;
    faseAtual++;
    telaExibida = 11;
    if(posicaoRespostaCerta != 2) {
      qtdVidas--;
    }
    
    sortearPergunta();
    dataInicial = new Date();
    tempoInicial = dataInicial.getTime();
  }

  if(telaExibida == 7 && faseAtual == 1) {
    sortearPergunta();
  }
  
  if (
    telaExibida == 7 &&
    mouseX >= 100 &&
    mouseX <= 500 &&
    mouseY >= 415 &&
    mouseY <= 485
  ) {
    
    
    posicaoClicada = 3;
    faseAtual++;
    telaExibida = 11;
    if(posicaoRespostaCerta != 3) {
      qtdVidas--;
    }
    
    sortearPergunta();
    

    dataInicial = new Date();
    tempoInicial = dataInicial.getTime();
  }

  if (faseAtual == 6) {
    if (qtdVidas == 0) {
      telaExibida = 9;
    } else {
      telaExibida = 8;
    }

    dataInicial = new Date();
    tempoInicial = dataInicial.getTime();

    for (var i = 0; i < sorteadas.length; i++) {
      sorteadas[i] = 0;
    }

    faseAtual = 1;
    qtdVidas = 5;
  }
}

function sortearPergunta() {
  perguntaSorteada = parseInt(random(0, 5));
  posicaoRespostaCerta = parseInt(random(0, 4));

  while (sorteadas[perguntaSorteada] == 1 && faseAtual != 5) {
    perguntaSorteada = parseInt(random(0, 5));
  }
  sorteadas[perguntaSorteada] = 1;
}

function keyPressed() {
  if (key == "Escape" && telaExibida <= 4) {
    telaExibida = 0;
  }
}
