export default class Cubo{
    constructor(aresta){
        this.aresta = aresta
    }
    calcularAreaTotal(){
        return 6 * Math.pow(this.aresta,2)
    }
    calcularVolume(){
        return Math.pow(this.aresta,3)
    }
}