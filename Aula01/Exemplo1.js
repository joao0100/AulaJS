document.write ("<h2>Entrada de Dados</h2>");

var numero1 = prompt("Digite o número 1");
var numero2 = prompt("Digite o número 2");

document.write ("Numero 1 = " + numero1 + "<br>");
document.write ("Numero 2 = " + numero2 + "<br>");


document.write ("<h2>Operações Aritméticas</h2>");
var resultado;

resultado = Number(numero1) + Number (numero2);

document.write ("A soma dos numeros é " + resultado + "<br>");

document.write ("<h2>Operações Arítméticas</h2>");

document.write ("A soma dos número é igual á " + resultado + "<br>");
resultado = Number(numero1) - Number (numero2);

document.write ("A diferença entre os Números é " + resultado + "<br>");
resultado = Number(numero1) * Number (numero2);
document.write ("O produto dos números é " + resultado + "<br>");
resultado = Number(numero1) / Number (numero2);
document.write ("A Divisão entre os Números é " + resultado + "<br>");
