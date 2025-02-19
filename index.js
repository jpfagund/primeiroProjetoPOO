import Cubo from "./model/Cubo.js"

document.getElementById("calc").addEventListener("click", ()=>{
    let cuboCalc = new Cubo(document.getElementById("aresta").value)
    document.getElementById("res").innerHTML = `A Área Total do cubo é de: ${cuboCalc.calcularAreaTotal().toFixed(2)}<br>E o Volume é igual a ${cuboCalc.calcularVolume().toFixed(2)}`
})