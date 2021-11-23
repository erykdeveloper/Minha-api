let botoesjogador = document.querySelectorAll(".btn-jogador");
let botaoplay = document.querySelector("#btn-play");
let botoescomputador = document.querySelectorAll(".btn-computador")
let mensagem = document.querySelector(".mensagem")
let vitoriajogador = document.querySelector("#jogador .vitorias");
let vitoriacomputador = document.querySelector("#computador .vitorias");

let opcaojogador = null;
let opcaocomputador = null;
let placarjogador = 0;
let placarcomputador = 0;

//eventos//

for (let i = 0; i <= 10; i++) {
    botoesjogador[i].addEventListener("click", cliquejogador);

}

botaoplay.addEventListener("click", jogar);



//açoes//

function cliquejogador(evento) {
    for (let i = 0; i <= 10; i++) {
        botoesjogador[i].style.opacity = "10%";
    }

    let elemento = evento.target;
    elemento.style.opacity = "100%";

    opcaojogador = elemento.dataset.opcao;
    botaoplay.disabled = false;
}

function jogar() {
    let opcoescomputador = ["1", "3", "5", "7", "9"];
    let sorteio = Math.floor(Math.random() * 6);
    opcaocomputador = opcoescomputador[sorteio];

    botaoplay.disabled = true;
    botoescomputador[sorteio].style.opacity = "100%";


    if (opcaocomputador == opcaojogador) {
        mensagem.innerHTML = "<h4> Jogo Empatado </h4>";
    } else if (opcaocomputador == "1" && opcaojogador == "2") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 3 </h4> <br> ";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;

    } else if (opcaocomputador == "1" && opcaojogador == "4") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 5</h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "1" && opcaojogador == "6") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 7 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "1" && opcaojogador == "8") {
        mensagem.innerHTML = "<h4>O computador venceu <br> O resultado é: 9 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "1" && opcaojogador == "10") {
        mensagem.innerHTML = "<h4> O computador venceu  <br> O resultado é: 11</h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "3" && opcaojogador == "2") {
        mensagem.innerHTML = "<h4> O computador venceu<br> O resultado é: 5 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "3" && opcaojogador == "4") {
        mensagem.innerHTML = " <h4> O computador venceu <br> O resultado é: 7</h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "3" && opcaojogador == "6") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 9 </h4> ";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;

    } else if (opcaocomputador == "3" && opcaojogador == "8") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 11</h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "3" && opcaojogador == "10") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 13 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "5" && opcaojogador == "2") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 7 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "5" && opcaojogador == "4") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 9</h4> ";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "5" && opcaojogador == "6") {
        mensagem.innerHTML = "<h4>O computador venceu <br> O resultado é: 11  </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputad
    } else if (opcaocomputador == "5" && opcaojogador == "8") {
        mensagem.innerHTML = "<h4>O computador venceu <br> O resultado é: 13</h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "5" && opcaojogador == "10") {
        mensagem.innerHTML = "O computador venceu <br> O resultado é: 15";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "7" && opcaojogador == "2") {
        mensagem.innerHTML = "<h4>O computador venceu <br> O resultado é: 9</h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "7" && opcaojogador == "4") {
        mensagem.innerHTML = "<h4> O computador venceu <br> O resultado é: 11 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "7" && opcaojogador == "6") {
        mensagem.innerHTML = " <h4>O computador venceu <br> O resultado é: 13 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;

    } else if (opcaocomputador == "7" && opcaojogador == "8") {
        mensagem.innerHTML = "<h4>O computador venceu <br> O resultado é: 15 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "7" && opcaojogador == "10") {
        mensagem.innerHTML = " <h4>O computador venceu <br> O resultado é: 17 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "9" && opcaojogador == "2") {
        mensagem.innerHTML = " <h4> O computador venceu <br> O resultado é: 11</h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "9" && opcaojogador == "4") {
        mensagem.innerHTML = " <h4> O computador venceu <br> O resultado é: 13 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "9" && opcaojogador == "6") {
        mensagem.innerHTML = " <h4>O computador venceu<br> O resultado é: 15 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;

    } else if (opcaocomputador == "9" && opcaojogador == "8") {
        mensagem.innerHTML = "<h4> O computador venceu<br> O resultado é: 17 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "9" && opcaojogador == "10") {
        mensagem.innerHTML = "<h4>O computador venceu<br> O resultado é: 19 </h4>";
        placarcomputador++;
        vitoriacomputador.innerHTML = placarcomputador;
    } else if (opcaocomputador == "1" && opcaojogador == "1") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 2</h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "1" && opcaojogador == "3") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 4</h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "1" && opcaojogador == "5") {
        mensagem.innerHTML = "<h4>O Jogador venceu<br> O resultado é: 6 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "1" && opcaojogador == "7") {
        mensagem.innerHTML = "<h4>O Jogador venceu<br> O resultado é: 8 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "1" && opcaojogador == "9") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 10 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "3" && opcaojogador == "1") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 4</h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "3" && opcaojogador == "3") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 6 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "3" && opcaojogador == "5") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 8 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "3" && opcaojogador == "7") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 10 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "3" && opcaojogador == "9") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 12 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "5" && opcaojogador == "1") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 6  </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "5" && opcaojogador == "3") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 8 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "5" && opcaojogador == "5") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 10 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "5" && opcaojogador == "7") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 12 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "5" && opcaojogador == "9") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 14 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "7" && opcaojogador == "1") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 8 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "7" && opcaojogador == "3") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 10 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "7" && opcaojogador == "5") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 12 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "7" && opcaojogador == "7") {
        mensagem.innerHTML = "<h4>O Jogador venceu </h4> <br> O resultado é: 14";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "7" && opcaojogador == "9") {
        mensagem.innerHTML = "<h4>O Jogador venceu<br> O resultado é: 16 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "9" && opcaojogador == "1") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 10 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "9" && opcaojogador == "3") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 12</h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "9" && opcaojogador == "5") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 14</h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "9" && opcaojogador == "7") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 16</h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "9" && opcaojogador == "9") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 18 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "10" && opcaojogador == "2") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 12 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "10" && opcaojogador == "4") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 14 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "10" && opcaojogador == "6") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 16 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "10" && opcaojogador == "8") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 18 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    } else if (opcaocomputador == "10" && opcaojogador == "10") {
        mensagem.innerHTML = "<h4>O Jogador venceu <br> O resultado é: 20 </h4>";
        placarjogador++;
        vitoriajogador.innerHTML = placarjogador;
    }

}