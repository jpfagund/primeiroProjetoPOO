import Cubo from "../model/Cubo.js"

describe("Teste da classe Cubo", ()=>{
    test("Testando o cálculo da área total", ()=>{
        const aresta = 3
        const areaTotalEsperada = 6 * Math.pow(aresta,2)
        const cuboTeste = new Cubo(aresta)
        expect(cuboTeste.calcularAreaTotal).toBeCloseTo(areaTotalEsperada,2)
    })
    test("Testando o cáculo da área total", ()=>{
        const aresta = 3
        const volumeEsperado = Math.pow(aresta,3)
        const cuboTeste = new Cubo(aresta)
        expect(cuboTeste.calcularVolume).toBeCloseTo(volumeEsperado,2)
    })
})