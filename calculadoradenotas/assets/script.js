var listadenotas = [];
var listadepesos = [];
listavalores = [];

// ===================================== CAPTURA DE ID's  ================================================
var nota = document.getElementById("nota");
var enviando = document.getElementById("enviando");
var calcular = document.getElementById("calcular");
var peso = document.getElementById("peso")
var btnpd = document.getElementById("btnpd")
var calcular2 = document.getElementById("calcular2")
var cpd = document.getElementById("cpd")
var result = document.getElementById("result")
var rta = document.getElementById("rta")
var rtp = document.getElementById("rtp")
var h3 = document.getElementById("h3")
var exibe1 = document.getElementById("exibe1")
var exibe2 = document.getElementById("exibe2")
// ===================================== FUNÇÕES DE ENVIO  ================================================
btnpd.addEventListener('click', function(){
    peso.style.display = "block"
    h3.style.display = "none"
    calcular.style.display = "none"
    btnpd.style.display = "none"})
    
calcular2.addEventListener('click', function(){
    listadepesos.push(parseFloat(peso.value));
    exibe2.innerHTML += '<h4>' + ('Peso: ' +(parseFloat(peso.value))) +'</h4>'
    console.log(listadepesos)})

enviando.addEventListener('click', function() {
    listadenotas.push(parseFloat(nota.value));
    exibe1.innerHTML += '<h4>'+ ("Nota: " + (parseFloat(nota.value))) +'</h4>'
    console.log(listadenotas);});
// ===================================== ARTMETICA ======================================================
calcular.addEventListener('click', function() {
    var totalzinho = listadenotas.reduce
    (function(acumulador, nota){
        return acumulador + nota; }, 0);
    divisor = listadenotas.length
    totalzinho = totalzinho / divisor 
    verifica(totalzinho)
    result.style.display = "block"
    rta.innerHTML = ("A media aritmetica é ")+(totalzinho).toFixed(2);});
// ==================================== PONDERADA =====================================================
cpd.addEventListener('click', function(){
    for(var i = 0; i < listadenotas.length; i++){
        var mediapd = 0
        mediapd = (listadenotas[i] * listadepesos[i]) + mediapd
        listavalores.push(mediapd)}

    var multi = listavalores.reduce
    (function(acumulador, nota){
        return acumulador + nota; }, 0);

    var pesoall = listadepesos.reduce
    (function(acumulador, nota){
        return acumulador + nota; }, 0);

    var mediaponderada = multi / pesoall
    result.style.display = "block"
    verifica(mediaponderada)
    rtp.innerHTML = ("A media ponderada é ")+(mediaponderada).toFixed(2)})
// ====================================== SISTEMA DE VERIFICAÇÃO =====================================================
function verifica(n1){
    if ( n1 >= 7 ){
    result.innerHTML = ("O aluno em questão conquistou sua aprovação")
}else{
    result.innerHTML = ("O aluno em questão ficou abaixo da media, deve-se levar seu desempenho a analise pedagogica e cogitar sua reprovação")}}
// ===========================================================================================
