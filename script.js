const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "o kaio merece uns beijinhos",
        alternativas: [
            function sim() {
                alert("e o cool nada? :)");
                location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
            }
        
            function desvia(btn) {
                btn.style.position = 'absolute';
                btn.style.bottom = geraPosicao(10, 90);
                btn.style.left = geraPosicao(10, 90);
                console.log('opa, desviei...');
            }
        
            function geraPosicao(min, max) {
                return (Math.random() * (max - min) + min) + "%";
            }
           
        ]
    },