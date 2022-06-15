//criando a variavel pra resposta, o querySelector passando qual o ID dele, para ele ser encontrado no HTML
const respostaElement = document.querySelector("#resposta");

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

//ação do click para fazer a pergunta
function fazerPergunta() {
  //vai dizer quantas resposta tem, total de posições
  const totalRespostas = respostas.length;
  //calcular utilizando o floor, para arrendondar sempre pro piso, multiplica o numero aleatorio com random que sempre é de 0 a 0.99 ou aproximadamente, e multiplica pelo total de respostas, gerando sempre numeros aleatorios e sempre até o maximo de posições no nosso array de resposta
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  console.log(respostas[numeroAleatorio]);

  //innerHTML, significa que o objeto respostaElement é um modelo HTML e ele vai mostrar na página
  respostaElement.innerHTML = "MOSTRAR";
}
