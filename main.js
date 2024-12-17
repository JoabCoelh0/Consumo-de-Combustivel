/*Determinar a velocidade media necessaria para um condutor atingir uma determinada distancia entre 2 pontos, levando em consideraçâo a capacidade do tanque de combustivel, a velocidade na estrada ou na cidade, o preço da gasolina atual e a quantidade de vezes a se abastecer e quanto terá gastar com gasolina.*/
/*
    Entrada dos dados (distância, capacidade do tanque, consumo, etc.).
    Cálculo da velocidade média - OK.
    Cálculo do consumo de combustível - OK.
    Verificação de ida e volta - OK.
    Cálculo dos gastos com gasolina - OK.
*/

const ConsumoEtanolEstrada = 10;   // km/l
const ConsumoEtanolCidade = 7;     // km/l
const ConsumoGasolinaEstrada = 14; // km/l
const ConsumoGasolinaCidade = 10;  // km/l


let precoCombustivel;
let combustivel; // variavel que chama a função e recebe o valor do combustivel no momento
let combustivelEscolhido;
let consumoDaViagem; //variavel que chama a função e recebe o resultado dos consumo da viagem
let IdaEVolta; // variavel que chama a função e recebe o resultado do tipo de viagem
let viagem; // variavel que recebe o tipod e viagem que ira acontecer s Ida e volta ou so ida
let custoDaViagem; //variavel que recebe o resultado do calculo do custo da viagem dentro da função
let gastos; //variavel que chama a função e recebe o resultado dos gastos da viagem

let veiculo = prompt("Qual o seu meio de transporte?");
let CapacidadeTanque = Number(prompt("Qual a capacidade maxima do seu tanque?(L)"))
let TipoDeViagem = Number(prompt("A viagem é (1 - Ida - Volta) ou (2 - Ida)?"))
let distanciaAteDestino = prompt("Qual a distancia até o destino?(Km)")
let tempoEstimado = prompt("Em que tempo deseja chegar ao seu destino?(minutos)")
let TipoDeCombustivel = Number(prompt("Qual o combustuvel você utiliza (1 - Etanol) ou (2 - Gasolina)"))
let TipoDeTrajeto = Number(prompt("Qual o tipo de trajeto que irá usar (1 - Estrada) ou (2 - Cidade)"))
//let passageiro = prompt("Você está com algum passageiro? se sim quantos?")



function velocidadeMedia(distanciaAteDestino, tempoEstimado){
    return distanciaAteDestino / (tempoEstimado / 60)
}

let vM = velocidadeMedia(distanciaAteDestino, tempoEstimado);
console.log(`Para percorer essa distancia é necessario ir a uma velocidade de ${vM.toFixed(2)} km/h`);

function EscolhadeCombustivel(TipoDeCombustivel){
    if(TipoDeCombustivel == 1){
        precoCombustivel = parseFloat(prompt("Você utiliza etanol no seu veiculo, qual o preço dele no momento?"));
        combustivelEscolhido = "Etanol";
    } else if (TipoDeCombustivel == 2){
        precoCombustivel = parseFloat(prompt("Você utiliza Gasolina no seu veiculo, qual o preço dele no momento?"));
        combustivelEscolhido = "Gasolina";
    } else {
        return combustivelEscolhido = "Você não informormou o tipo d combustivel"
    }
}
combustivel = EscolhadeCombustivel(TipoDeCombustivel)


function CalcularConsumo(TipoDeCombustivel, TipoDeTrajeto){
    
    if(TipoDeCombustivel == 1 && TipoDeTrajeto == 1) {
        return  distanciaAteDestino / ConsumoEtanolEstrada
    } else if(TipoDeCombustivel == 1 && TipoDeTrajeto == 2){
        return distanciaAteDestino / ConsumoEtanolCidade
    } else if(TipoDeCombustivel == 2 && TipoDeTrajeto == 1){
        return distanciaAteDestino / ConsumoGasolinaEstrada
    } else if(TipoDeCombustivel == 2 && TipoDeTrajeto == 2){
        return distanciaAteDestino / ConsumoGasolinaCidade
    } else{
        return "Entrada invalida"
    }
}
consumoDaViagem = CalcularConsumo(TipoDeCombustivel, TipoDeTrajeto);
console.log(`O consumo de combustivel durante esse trajeto e de ${consumoDaViagem.toFixed(2)} km/L`);

function VerificaçãoIdaEvolta(TipoDeViagem){
    if(TipoDeViagem == 1){
        viagem = "Ida e Volta" 
        distanciaAteDestino = distanciaAteDestino * 2;
        
    } else if (TipoDeViagem == 2){
        viagem = "Ida"
        distanciaAteDestino = distanciaAteDestino;   
    } else {
        return "Viagem invalida"
    }
}
IdaEVolta = VerificaçãoIdaEvolta(TipoDeViagem);
console.log(`A viagem será de ${viagem}`)

function gastosComCombustivel(){
    return (distanciaAteDestino / consumoDaViagem) * precoCombustivel
}
gastos = gastosComCombustivel()
console.log(`Você irá gastar com combustivel para chegar ao seu destino cerca de ${gastos} reais`);


let dadosDaViagem = {
    modelo: veiculo,
    tanque: CapacidadeTanque,
    tipoViagem: viagem,
    TipocCombustivel: combustivelEscolhido
}

console.log(dadosDaViagem)