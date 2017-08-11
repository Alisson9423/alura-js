class Negociacao {
    constructor (data,qtd, valor){
        this._data = data;
        this._quantidade = qtd;
        this._valor = valor;
    }
    
    getVolume(){
        return this._quantidade * this._valor;
    }
    
    getData(){
        return this._data;
    }
    
    getQuantidade (){
        return this._quantidade;
    }
    
    getValor(){
        return this._valor;
    }
    
}