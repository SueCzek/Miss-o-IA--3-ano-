const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Qual a missão da empresa Brink Park Paranaguá?",
        alternativas: [
            "Encantar as crianças e seus pais para gerar alegria e lucro",
            "Encantar  com a experiencia únicas e inesqueciveis, despertar alegria, felicidade e o desejo de voltar",
            "Encantar as crianças a ponto que o mesmo deseje voltar sempre e com isso fidelizar cliente"
        ]
    },
    {
        enunciado: "Qual a visão da empresa Brink Park Paranaguá?",
        alternativas: [
            "Ser reconhecido como a empresa exemplo no mercado de Paranaguá",
            "Se tornar a empresa mais invejada de Paranguá",
            "Ser reconhecido como o destino preferido das familias de Paranaguá"
        ]
    },
    {
        enunciado: "Sobre nossos Valores, qual deles se encaixa no perfil?",
        alternativas: [
            "Atenção nos detalhes, organização e pontualidade",
            "Encantamento, apatico e introvertido",
            "Pontual, tranquilidade e educação"

        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta( ) {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

}

mostraPergunta();


