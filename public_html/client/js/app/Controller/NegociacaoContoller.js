class NegociacaoContoller{
    
    
    constructor(){
        
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._listaNegociaoes = new ListaNegociacoes();// Criando um objeto do arquivo ListaNegociacoes.js
        this._negociaoesView = new NegociaoesView($("#negociaoesView"));//Criando um objeto do arquivo NegociaoesView.js
        this._negociaoesView._update(this._listaNegociaoes);//chamando um metodo da class NegociaoesView e passando como parametro um objeto
    }
    
    adiciona(event){
        event.preventDefault();
        
        this._listaNegociaoes.adiciona(this._criaNegociacao());//add um negocião passando como parametro um metodo e esse metodo me retorna um objeto da class Negociacao
        this._negociaoesView._update(this._listaNegociaoes);//atualizando a lista de negocições passando um objeto da class ListaNegociacoes.js
        this._limpaFormulario();
    
    }
    
    _criaNegociacao(){
        return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),//setando valores para o constructor da class Negociacao
                this._inputQuantidade.value,
                this._inputValor.value
                );
    }
    
    _limpaFormulario(){
        this._inputValor.value = "0.0"
        this._inputQuantidade.value = "1"
        this._inputData.value = ""
        this._inputData.focus();
    }
    
}