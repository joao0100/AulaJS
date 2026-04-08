function Calcular()
{
    let valor, taxa, tempo, resultado;
    // entrada
    valor = Number( document.getElementById("Valor").value );
    tempo = Number(document.getElementById("Tempo").value );
    taxa = Number(document.getElementById("Taxa").value );

    //processamento
    resultado = valor + (valor * (taxa * taxa / 100) * tempo );

    //saida
    document.getElementById("Resultado").innerHTML = 
    "<p>O Valor da Parcela é " + resultado + "</p>";
}