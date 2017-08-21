class NegociacaoContoller{
    
    
    constructor(){
        
        let $ = document.querySelector.bind(document);
        
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._listaNegociaoes = new Bind(
                new ListaNegociacoes(),
                new NegociaoesView($("#negociaoesView")),
                'adiciona','esvazia'
                );
        
        this._mensagem = new Bind(
                new Mensagem(),
                new MensagemView($('#mensagemView')),
                'texto'
                );
        
  
        
    }
    
    adiciona(event){
        event.preventDefault();
        this._listaNegociaoes.adiciona(this._criaNegociacao());//add um negocião passando como parametro um metodo e esse metodo me retorna um objeto da class Negociacao
        this._mensagem.texto = "Negociação Adicionada Com Sucesso !";
        this._limpaFormulario();
    
    }
    
    apaga(){
        this._listaNegociaoes.esvazia();
        this._mensagem.texto = "Negociação Appagada Com Sucesso !";
        
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