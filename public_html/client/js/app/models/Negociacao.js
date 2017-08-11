class Negociacao {
    constructor (data,qtd, valor){
        this.data = data;
        this.quantidade = qtd;
        this.valor = valor;
    }
    
    obetemVolume(){
        return this.quantidade * this.valor;
    }
}