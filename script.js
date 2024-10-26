const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Posso beijar nessa boca sua?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Você aceitou namorar comigo! :)"
            },
            {
                texto: "Não",
                afirmacao: "Você recusou o pedido. :("
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        
        if (alternativa.texto === "Não") {
            botaoAlternativas.addEventListener("mouseenter", () => desviaBotao(botaoAlternativas));
        } else {
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        }

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function desviaBotao(botao) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = botao.offsetWidth;
    const buttonHeight = botao.offsetHeight;

    const newX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    const newY = Math.floor(Math.random() * (windowHeight - buttonHeight));

    botao.style.position = "absolute";
    botao.style.left = `${newX}px`;
    botao.style.top = `${newY}px`;
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";

    if (opcaoSelecionada.texto === "Sim") {
        alert(afirmacao);
        window.location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
    }

    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado :)";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
