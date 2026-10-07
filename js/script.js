const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

export const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "Você percebe que uma tecnologia tão avançada pode trazer riscos quando utilizada de maneira irresponsável.",
                    "Ao mesmo tempo, começa a pensar sobre a importância de aprender como a IA funciona antes de utilizá-la."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Você fica curioso para descobrir de que maneiras a IA pode ajudar nos estudos e nas tarefas do dia a dia.",
                    "Também percebe que, apesar das possibilidades, é importante utilizar a tecnologia de forma responsável e consciente."
                ]
            }           
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao: [
                    "Você utiliza a IA como uma ferramenta de apoio, buscando informações e explicações que possam facilitar sua compreensão.",
                    "Durante a pesquisa, percebe que é necessário conferir as informações encontradas e utilizar outras fontes para garantir a qualidade do trabalho."
                ]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Você decide construir o trabalho utilizando diferentes fontes e suas próprias ideias sobre o assunto.",
                    "Ao pesquisar por conta própria, percebe que comparar informações de diferentes fontes ajuda a desenvolver uma visão mais crítica sobre o tema."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
                afirmacao: [
                    "Você acredita que as mudanças provocadas pela IA precisam considerar os impactos sobre os trabalhadores.",
                    "Também entende que será importante investir em educação e capacitação para ajudar as pessoas a se adaptarem às novas tecnologias."
                ]
            },
            {
                texto: "Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: [
                    "Você acredita que a IA pode assumir algumas tarefas repetitivas e permitir que as pessoas se concentrem em atividades diferentes.",
                    "Também percebe que novas profissões e habilidades podem surgir à medida que a tecnologia evolui."
                ]
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: [
                    "Você decide produzir a imagem manualmente, utilizando sua própria criatividade para representar suas ideias.",
                    "Durante a criação, percebe que ferramentas tradicionais também podem ser utilizadas para expressar conceitos relacionados à tecnologia."
                ]
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: [
                    "Você utiliza a IA para transformar suas ideias em uma representação visual e experimentar diferentes possibilidades.",
                    "Ao utilizar a ferramenta, percebe a importância de conhecer seus recursos e limitações para conseguir o resultado desejado."
                ]
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: [
                    "Você decide revisar o conteúdo produzido pela IA, verificando as informações e corrigindo possíveis erros.",
                    "Além disso, incentiva o grupo a acrescentar suas próprias ideias e conhecimentos para que o trabalho realmente represente a participação de todos."
                ]
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: [
                    "Você considera que a elaboração dos comandos já representa uma forma de participação no desenvolvimento do trabalho.",
                    "Porém, ao longo da discussão, percebe que utilizar o texto completo sem revisão pode dificultar a identificação de erros e limitar a contribuição dos integrantes."
                ]
            }
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}
function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}
mostraPergunta();