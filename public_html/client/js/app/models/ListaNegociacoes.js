class ListaNegociacoes{
    
    constructor(armadilha){
        this._negociaoes = [];
        this._armadilha = armadilha;
        
    }
    
    adiciona(negociacao){
        this._negociaoes.push(negociacao);//add itens no array
        this._armadilha(this);
    }
    
    get Negocioaoes(){
        return [].concat(this._negociaoes);//programação defensiva retorna uma copia das negociaoes
    }
    
    esvazia(){
        this._negociaoes = [];
        this._armadilha(this);
    }
    
}