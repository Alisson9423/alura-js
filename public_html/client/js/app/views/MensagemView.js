class MensagemView extends View{
    
    constructor(elemento){
        super(elemento); //passando elelmento para class super no caso a class pai View
    }
    
    template(model){
        return model.texto ?  `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
    
    
}