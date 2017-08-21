class ListaNegociacoes{
    
    constructor(contexto,armadilha){
        this._negociaoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    }
    
    adiciona(negociacao){
        this._negociaoes.push(negociacao);//add itens no array
        Reflect.apply(this._armadilha,this._contexto, [this]);
        //this._armadilha(this);
    }
    
    get Negocioaoes(){
        return [].concat(this._negociaoes);//programação defensiva retorna uma copia das negociaoes
    }
    
    esvazia(){
        this._negociaoes = [];
        Reflect.apply(this._armadilha,this.contexto, [this]);
        //this._armadilha(this);
    }
    
}