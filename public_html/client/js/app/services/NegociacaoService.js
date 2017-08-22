class NegociacaoService {
    
    
    constructor(){
        this._http = new HttpService(); 
    }
    
    obterNegociacoesDaSemana(){
     
        return new Promise((resolve, Reject) => {
        
        this._http.get('negociacoes/semana')
                .then(negociaoes =>{
                resolve(negociaoes.map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade, objeto.valor)));
            }).catch (erro =>{
                console.log(erro);
                Reject("Não Foi Possivel Obter As Negociaões da Semana");
            }); 

        
            
        });
    
    }
    obterNegociacoesDaSemanaAnterior(){
        return new Promise((resolve, Reject) => {
        
        this._http.get('negociacoes/anterior')
                .then(negociaoes =>{
                resolve(negociaoes.map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade, objeto.valor)));
            }).catch (erro =>{
                console.log(erro);
                Reject("Não Foi Possivel Obter As Negociaões da Anterior");
            }); 

        
            
        });
        
    }
    
    obterNegociacoesDaSemanaRetrasada(){
       
        return new Promise((resolve, Reject) => {
        
        this._http.get('negociacoes/retrasada')
                .then(negociaoes =>{
                resolve(negociaoes.map(objeto => new Negociacao(new Date(objeto.data),objeto.quantidade, objeto.valor)));
            }).catch (erro =>{
                console.log(erro);
                Reject("Não Foi Possivel Obter As Negociaões da Retrasada");
            }); 

        
            
        });
       
    }
}