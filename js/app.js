let primeiroNumero = parseInt(Math.random()*900);
let segundoNumero = parseInt(Math.random()*500);
let resultado = primeiroNumero + segundoNumero;
console.log(primeiroNumero, segundoNumero); 
console.log(resultado);
let antecessor = resultado;
console.log(resultado-1)
let sucessor = antecessor;
console.log(antecessor+1)
let dobro =  resultado;
console.log(resultado*2);
let divisao =  resultado;
console.log(resultado/2);

// exibindo a página para isso criamos uma variavel que recebe o elemento html 
document.getElementById("elPrimeiroNumero").textContent = `Primeiro Número: ${primeiroNumero}`;
document.getElementById("elSegundoNumero").textContent = `Segundo Número: ${segundoNumero}`;
document.getElementById("elresultadoSoma").textContent = `resultado: ${resultado}`;
`${primeiroNumero} + ${segundoNumero} = ${resultado}`;