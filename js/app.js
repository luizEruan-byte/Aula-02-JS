let primeiroNumero = parseInt(Math.random()*900);
let segundoNumero = parseInt(Math.random()*500);
let soma = primeiroNumero + segundoNumero;
console.log(primeiroNumero, segundoNumero); 
console.log(soma);

let subtracao = primeiroNumero - segundoNumero;
console.log(subtracao);
let multiplicacao = primeiroNumero * segundoNumero;
console.log(multiplicacao);
let divisao = primeiroNumero / segundoNumero;
console.log(divisao);
let modulo = primeiroNumero % segundoNumero;
console.log(modulo);
let igualdade = primeiroNumero === segundoNumero;
console.log(igualdade);
let desigualdade = primeiroNumero !== segundoNumero;
console.log(desigualdade);
let maiorigual = primeiroNumero >= segundoNumero;
console.log(maiorigual);
let menorigual = primeiroNumero <= segundoNumero;
console.log(menorigual);
let maior = primeiroNumero > segundoNumero;
console.log(maior);
let menor = primeiroNumero <= segundoNumero;
console.log(menor);


// exibindo a página para isso criamos uma variavel que recebe o elemento html 
document.getElementById("elPrimeiroNumero").textContent = `Primeiro Número: ${primeiroNumero}`;
document.getElementById("elSegundoNumero").textContent = `Segundo Número: ${segundoNumero}`;
document.getElementById("elResultadoSoma").textContent = `Primeiro número + Segundo Número: ${soma}`;
`${primeiroNumero} + ${segundoNumero} = ${soma}`;
document.getElementById("elResultadoSubtracao").textContent = `Primeiro Número - Segundo Número: ${subtracao}`;
document.getElementById("elResultadoMultiplicacao").textContent = `Primeiro Número * Segundo Número: ${multiplicacao}`;
document.getElementById("elResultadoDivisao").textContent = `Primeiro Número / Segundo Número: ${divisao.toFixed(2)}`;
document.getElementById("elIgualdade").textContent = `Primeiro Número = Segundo Número: ${igualdade}`;
document.getElementById("elDesigualdade").textContent = `Primeiro Número ! Segundo Número: ${desigualdade}`;
document.getElementById("elMaiorIgual").textContent = `Primeiro Número >= Segundo Número: ${maiorigual}`;
document.getElementById("elMenorIgual").textContent = `Primeiro Número <= Segundo Número: ${menorigual}`;
document.getElementById("elMaior").textContent = `Primeiro Número > Segundo Número: ${maior}`;
document.getElementById("elMenor").textContent = `Primeiro Número < Segundo Número: ${menor}`;


resultado = (primeiroNumero >= segundoNumero) || (segundoNumero > 3);
document.getElementById('operadorOU').textContent = `${primeiroNumero} > ${segundoNumero} || ${segundoNumero} > 3 = ${resultado}`;
resultado = (primeiroNumero >= segundoNumero) && (segundoNumero > 3);
document.getElementById('operadorE').textContent = `${primeiroNumero} > ${segundoNumero} && ${segundoNumero} > 3 = ${resultado}`;
resultado = !((primeiroNumero >= segundoNumero) && (segundoNumero > 3));
document.getElementById('operadorNAO').textContent = `!(${primeiroNumero} > ${segundoNumero} || ${segundoNumero} > 3) = ${resultado}`;

resultado = primeiroNumero ** segundoNumero;
document.getElementById('potencia').textContent = `${primeiroNumero} ** ${segundoNumero} = ${resultado}`;
