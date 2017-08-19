class ListaNegociacoes{
    
    constructor(){
        this._negociaoes = [];
    }
    
    adiciona(negociacao){
        this._negociaoes.push(negociacao);//add itens no array 
    }
    
    get Negocioaoes(){
        return [].concat(this._negociaoes);//programação defensiva retorna uma copia das negociaoes
    }
}